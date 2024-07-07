let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#lis')
let res = document.querySelector('div#res')
let valores = []

function Numero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true;
    } else{
        return false;
    }
}

function Lista(n , l){
    if(l.indexOf(Number(n)) != -1){
        return true;
    }else{
        return false;
    }
}

function adicionar(){
    if (Numero(num.value) && !Lista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    }else{
        alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()
}

function final(){
    if(valores.length == 0){
        alert('Adicione valores antes de finalizar!')
    }else{
        valores.sort((a, b) => a - b)
        let soma = 0
        for(let pos in valores){
            soma += valores[pos]
        }
        let media = soma/valores.length
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${valores.length} númeroas cadastrados</p>`
        res.innerHTML += `<p>O maior valor informado foi ${valores[valores.length - 1]}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${valores[0]}</p>`
        res.innerHTML += `<p>Somandos todos os valores, temos ${soma}</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media.toFixed(2)}</p>`
    }
}
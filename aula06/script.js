function calcular() {
    var vel = document.getElementById('txtvel')

    var resultado = document.getElementById('res')
    var velocidade = Number(vel.value)

    if (velocidade < 40) {
        resultado.innerHTML = 'sua velocidade é de ' + velocidade + ' voce não foi multado'
    }
    
    else {
        resultado.innerHTML = 'sua velocidade é de ' + velocidade + ' voce foi multado'
    }
    

}
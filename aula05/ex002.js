
let a = document.getElementById('area') 
function clicar(){
    
    a.innerText = "clicou"
    a.style.background = "black"
}

function entrar(){
    a.innerText = "entrou"
    a.style.background = "green"
}

function saiu(){
    a.innerText = "saiu"
    a.style.background = "red"
}

function somar(){
    var in1 = document.getElementById("inp1")
    var in2 = document.getElementById("inp2")
    var res = document.getElementById("resultado")

    n1 = Number(in1.value)
    n2 = Number(in2.value)

    var somar = n1 + n2 

    res.innerHTML = somar


}
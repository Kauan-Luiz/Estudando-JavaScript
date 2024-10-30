const data = new Date()
let ano = data.getFullYear()

function verificar(){
    
    let fano = document.getElementById("txtano").value;
    let res = document.getElementById("res")

    fano = Number(fano)

    let idade;

    if(fano <= 1922 || fano === ano + 1) {
        alert ("voce nem existe, faz direito")
        return;
    }
    else {
        idade = ano - fano
        let fsex = document.getElementsByClassName("radsex")
        let genero = ""
        
        if (fsex[0].checked) {
            genero = "homem";
        } else if (fsex[1].checked) {
            genero = "mulher";
        } else {
            genero = "não especificado"; // Valor padrão se nenhum gênero estiver selecionado
        }
    
        res.innerHTML = "Você tem " + idade + " anos e seu gênero é " + genero + ".";
    }

    
}
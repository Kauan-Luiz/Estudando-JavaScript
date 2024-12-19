window.onload = function (){
    tratar_eventos();
    tocar_audio('abertura');
}

function tratar_eventos(){
    document.getElementById("btn-comecar").onclick = function(){
        tocar_audio('comecar');
        document.getElementById("comecar").style.display = "none";
        document.getElementById("pergunta1000").style.display = "block";
    }
}

document.getElementById("form-pergunta1000").onsubmit = function(){
    var opcao_correta = "3";
    var opcao_selecionada = this.pergunta1000.value;

    if (opcao_selecionada == opcao_correta){
        tocar_audio('pergunta-2000')
        document.getElementById("pergunta1000").style.display = "none";
        Document.getElementById("pergunta2000").style.display = "block"
    }
    else{
        document.getElementById("pergunta1000").style.display = "none";
        tocar_audio = ('errou');
        reinicia_jogo();
    }

    return false;
}

function reinicia_jogo(){
    document.getElementById("comecar").style.display = "block";
    document.getElementById("btn-comecar").innerHTML = "jogar novamente";
}
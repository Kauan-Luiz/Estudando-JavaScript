

function contar(){
    var numero_primeiro = document.getElementById("inicio").value;
    var numero_ultimo = document.getElementById("fim").value;
    var passo = document.getElementById("passo").value;
    var total = document.getElementById("total");

    var primeiro_numero = Number(numero_primeiro);
    var ultimo_numero = Number(numero_ultimo);
    var valor_passo = Number(passo)

    total.innerHTML = '';

    if (valor_passo == 0){
        total.innerHTML = "o valor de passo não pode ser zero";
        return;
    }

    else{
        while(primeiro_numero <= ultimo_numero){

            total.innerHTML += primeiro_numero + " ";
            primeiro_numero = primeiro_numero + valor_passo
        }
    }
    }
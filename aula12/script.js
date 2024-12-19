
function meuEscopo(){

    let form = document.getElementById('form')
    let resultado = document.querySelector('.resultado')


    let pessoas = [
        
    ];

    let contador = 0 

   function recebeEventoForm(evento) {

    evento.preventDefault();

     const nome = document.querySelector('.nome')
     const sobrenome = document.querySelector('.sobrenome')
     const peso = document.querySelector('.peso')
     const altura = document.querySelector('.altura')
    contador++;

     pessoas.push({
        nome: nome.value,
        sobrenome: sobrenome.value,
        peso: peso.value,
        altura: altura.value
    });
            
    resultado.innerHTML += `<h1> Informações ID: ${contador} </h1> <br> <p> Nome: ${nome.value} </p> <br>  <p> Sobrenome: ${sobrenome.value}</p> <br> <p>  Peso: ${peso.value} </p> <br> <p> Altura: ${altura.value} </p>`
   };

   form.addEventListener('submit', recebeEventoForm);

};

meuEscopo();
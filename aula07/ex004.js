
// Criar o objeto Date
const agora = new Date();

// Pegar as horas, minutos e segundos 
const horas = agora.getHours();  // Corrigido para getHours()
const minutos = agora.getMinutes(); // Corrigido para getMinutes()
const segundos = agora.getSeconds(); // Corrigido para getSeconds()

// Selecionar o elemento com o id "hora"
const titulo = document.getElementById("hora");

// Formatar os minutos e segundos para ter sempre dois dígitos
const horaFormatada = `${horas}:${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;

// Atribuir a hora formatada ao elemento
titulo.innerHTML = "Agora são exatamentes: " + horaFormatada;

const foto = document.getElementById('image');

// Alterar a imagem com base na hora
if (horas >= 12 && horas < 18) {
    foto.src = 'fototarde.jpg'; // Altera para a imagem da tarde
} else if (horas >= 18 || horas < 5) { // Corrigido para abranger a noite
    foto.src = 'fotonoite.jpg'; // Altera para a imagem da noite
} else if (horas >= 5 && horas < 12) {
    foto.src = 'fotomanha.jpg'; // Altera para a imagem da manhã
}
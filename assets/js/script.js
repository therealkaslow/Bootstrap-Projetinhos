//  Declaração de Variaveis

// var nome = 'thiago' //modelo mais antigo e em desuso de variavel

// let nome2 = 'thiago2' //variavel para quando irão existir mudanças
// const nome3 = 'thiago3' //variavel "fixa", não vai mudar ao longo do tempo

//  Interação com a DOM
// let nome = document.getElementById('nome')
// let nome2 = document.getElementsByClassName('texto')
// let nome3 = document.querySelector('.nome')
// const botaozinho = document.querySelector('#envio')

// ! Variaveis de escopo global
let nome = document.getElementById('nome');
let email = document.getElementById('email');
let assunto = document.getElementById('assunto');
let nomeOk = false;
let emailOk = false;
let assuntoOk = false;
const mapa = document.querySelector('#mapa');

// ? validação de nome básica
function validaNome() {
  let txtNome = document.querySelector('#txtNome');
  if (nome.value.length < 3) {
    txtNome.innerHTML = 'Nome Inválido';
    txtNome.style.color = 'red';
  } else {
    txtNome.innerHTML = 'Nome Válido';
    txtNome.style.color = 'green';
    nomeOk = true;
  }
}

// ? Validação de e-mail com indexOf
function validaEmail() {
  let txtEmail = document.querySelector('#txtEmail');

  if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
    txtEmail.innerHTML = 'E-mail inválido';
    txtEmail.style.color = 'red';
  } else {
    txtEmail.innerHTML = 'E-mail válido';
    txtEmail.style.color = 'green';
    emailOk = true;
  }
}

// ? Validação do campo assunto
function validaAssunto() {
  let txtAssunto = document.querySelector('#txtAssunto');

  if (assunto.value.length >= 100) {
    txtAssunto.innerHTML =
      'Texto é muito grande, digite no máximo 100 caracteres';
    txtAssunto.style.color = 'red';
    txtAssunto.style.display = 'block';
  } else {
    txtAssunto.style.display = 'none';
    assuntoOk = true;
  }
}

// ? função de envio básica com validação de preenchimento de campos
function enviar() {
  if (nomeOk == true && emailOk == true && assuntoOk == true) {
    alert('Formulário enviado com sucesso!');
  } else {
    alert('Preencha o formulário corretamente antes de enviar...');
  }
}

// ? Função de alteração da estilização do mapa
function mapaZoom() {
  mapa.style.width = '600px';
  mapa.style.height = '350px';
}

function mapaNormal() {
  mapa.style.width = '400px';
  mapa.style.height = '250px';
}

// ! Validação de E-mail com regex + match
// function emailValidate() {
//   const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

//   if (email.value.match(mailformat)) {
//     txtEmail.innerHTML = 'E-mail válido';
//     txtEmail.style.color = 'green';
//     emailOk = true;
//   } else {
//     txtEmail.innerHTML = 'E-mail inválido';
//     txtEmail.style.color = 'red';
//   }
// }

// ? Efeito de digitação básico
const texts = ['comigo', 'conosco', 'com a Gen'];
let count = 0;
let index = 0;
let currentText = '';
let letters = '';

(function type() {
  if (count === texts.length) {
    count = 0;
  }
  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.querySelector('.typing').textContent = letter;

  if (letter.length === currentText.length) {
    count++;
    index = 0;
  }
  setTimeout(type, 500);
})();



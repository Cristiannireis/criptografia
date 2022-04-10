
let entradaTexto = document.getElementById('input-texto');
let btnCripto = document.querySelector('#btn-cripto'); 
let saidaTexto = document.querySelector('#msg'); 
let textoCriptografado = saidaTexto.value; 
let btnCopiar = document.querySelector('#btn-copy'); 

btnCripto.addEventListener('click', function(event){
  event.preventDefault();
  if (entradaTexto.value != ""){
    let novoTexto = entradaTexto.value.replace(/e/gi, 'enter').replace(/i/gi, 'imes').replace(/a/gi,'ai').replace(/o/gi,'ober').replace(/u/gi,'ufat');
    saidaTexto.value = novoTexto;
    entradaTexto.value="";
  } else {
    entradaTexto.value = "Digite sua palavra!";

    }
});

btnCopiar.addEventListener('click', function(){
  saidaTexto.select();
  saidaTexto.value="";
});
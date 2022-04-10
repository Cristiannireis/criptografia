
let btnDescripto = document.getElementById("btnDescripto"); 
let codigos = ["ai","enter","imes","ober","ufat"]; 

btnDescripto.addEventListener('click',function(event){
event.preventDefault()
analiseCriptografia();
entradaTexto.value="";
});

function analiseCriptografia(){
  let verifica = codigos.some(codigos => entradaTexto.value.includes(codigos));
  if (verifica==true) {
    descriptografar();
  } else {
    alert("ATENÇÃO! O texto não está criptografado!");
  }
};

function descriptografar() {
  let textoDescripto = entradaTexto.value.replace(/ai/gi,"a").replace(/enter/gi,"e").replace(/imes/gi,"i").replace(/ober/gi,"o").replace(/ufat/gi,"u");
  saidaTexto.value=textoDescripto;

};
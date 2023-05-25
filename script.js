// llaves
var vocales = [
    { vocal: "a", enlace: "ai" },
    { vocal: "e", enlace: "enter" },
    { vocal: "i", enlace: "imes" },
    { vocal: "o", enlace: "ober" },
    { vocal: "u", enlace: "ufat" }
  ];

  function crearYlimpiar(resultado){
    var output= document.getElementById("output");
     output.innerHTML="";
    var result= document.createElement("texTarea");
    result.setAttribute("rows", "4");
    result.setAttribute("cols", "30");
     result.textContent=resultado;
     result.id = "encriptado";
     result.readOnly=true;
    result.classList.add("crearYlimpiar");
    
    var boton = document.createElement("button");
    boton.textContent="copiar";
    boton.id="copiar";
    boton.addEventListener("click", copiarAlPortapapeles);
    boton.classList.add("botonCopiar");
    

    output.appendChild(result);
    output.appendChild(boton);

  }

function capturarTexto(){
    var texto = document.getElementById("escribir").value;
    console.log(texto);
    document.getElementById("escribir").value = "";
    var resultado = encriptar(texto);
    /*document.getElementById("output").innerHTML = resultado;
    */
    crearYlimpiar(resultado)

   
}

//funcion encriptar
function encriptar(texto){
    var nuevoTexto="";
    for(var i=0 ; i<texto.length; i++){
        var letra = texto[i];
        for(k=0;k<vocales.length;k++){
            var bandera=false;
        if(letra==vocales[k].vocal){
            nuevoTexto=nuevoTexto+vocales[k].enlace;
            bandera=true;
            break;
        }     
        }
        if(!bandera){
             nuevoTexto=nuevoTexto+letra;
        }
    }
    return nuevoTexto;
}

function capturarTexto2(){
    var texto = document.getElementById("escribir").value;

    document.getElementById("escribir").value = "";
    var resultado = desencriptar(texto);
    crearYlimpiar(resultado)

}
//funcion desencriptar
function desencriptar(texto){
var nuevoTexto="";

for(var e=0;e<texto.length;e++){
 var letra = texto[e];

for(var i=0 ; i<vocales.length; i++){
   var bandera=false;
    var prueba=letra;
    for(k=1;k<vocales[i].enlace.length;k++){
        prueba=prueba+texto[e+k]
    }
    console.log(prueba+" ==  "+vocales[i].enlace);
    if(prueba==vocales[i].enlace){
        nuevoTexto = nuevoTexto+vocales[i].vocal;
        e=e+vocales[i].enlace.length-1;
        bandera=true;
        break;
    }
}
if(!bandera){
    nuevoTexto=nuevoTexto+letra;
}
}
return nuevoTexto;
}

function copiarAlPortapapeles() {

    var parrafo = document.getElementById("encriptado");
    var texto = parrafo.textContent;
  
    
    var tempTextArea = document.createElement("textarea");
    tempTextArea.value = texto;
    
    
    document.body.appendChild(tempTextArea);
    
    tempTextArea.select();


    
    try {
      // Copiar el texto al portapapeles utilizando el API Clipboard
      document.execCommand("copy");
      console.log("El texto se ha copiado al portapapeles: " + texto);
    } catch (err) {
      console.error("No se pudo copiar el texto al portapapeles: ", err);
    }
    
    // Remover el elemento temporal del documento
    document.body.removeChild(tempTextArea);
  }
  
  
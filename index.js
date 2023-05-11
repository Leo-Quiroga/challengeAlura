
function saltarLinea() {

    document.write("<br>");

};

function imprimir(frase) {

    document.write(frase);
    saltarLinea();

};

var inputHTML = document.querySelector("#inputTexto");//se trae el textArea donde el usuario pone el texto que quiere encriptar HTML a javascript.
inputHTML.focus();

var textoEncriptado = "";



function encriptar() {                      //función que encripta el texto.

    let textoArray = inputHTML.value;

    textoArray = textoArray.split('');

    for (let i = 0; i < textoArray.length; i++) {


        switch (true) {
            case textoArray[i] == "a":
                textoArray[i] = textoArray[i].replace("a", "ai");

                break;
            case textoArray[i] == "e":
                textoArray[i] = textoArray[i].replace("e", "enter");

                break;
            case textoArray[i] == "i":
                textoArray[i] = textoArray[i].replace("i", "imes");

                break;
            case textoArray[i] == "o":
                textoArray[i] = textoArray[i].replace("o", "ober");

                break;
            case textoArray[i] == "u":
                textoArray[i] = textoArray[i].replace("u", "ufat");

                break;
            default:
                break;
        }


    }

    textoEncriptado = textoArray.join('');

    inputHTML.value = "";                           //limpia el textArea una vez se encripta

    document.getElementById("inputEncriptado").value = textoEncriptado;

};

function desencriptar() {                           //función que desencripta el texto.

    let textoArray = inputHTML.value;

    textoArray = textoArray.split('');

    for (let i = 0; i < textoArray.length; i++) {


        switch (true) {
            case textoArray[i] == "a":
                textoArray[i + 1] = textoArray[i].pop;

                break;
            case textoArray[i] == "e":
                textoArray[i + 1] = textoArray[i].pop;
                textoArray[i + 2] = textoArray[i].pop;
                textoArray[i + 3] = textoArray[i].pop;
                textoArray[i + 4] = textoArray[i].pop;

                break;

            case textoArray[i] == "i":
                textoArray[i + 1] = textoArray[i].pop;
                textoArray[i + 2] = textoArray[i].pop;
                textoArray[i + 3] = textoArray[i].pop;

                break;
            case textoArray[i] == "o":
                textoArray[i + 1] = textoArray[i].pop;
                textoArray[i + 2] = textoArray[i].pop;
                textoArray[i + 3] = textoArray[i].pop;

                break;
            case textoArray[i] == "u":
                textoArray[i + 1] = textoArray[i].pop;
                textoArray[i + 2] = textoArray[i].pop;
                textoArray[i + 3] = textoArray[i].pop;

                break;
            default:
                break;
        }



    }

    textoEncriptado = textoArray.join('');

    inputHTML.value = "";

    document.getElementById("inputEncriptado").value = textoEncriptado;

}

function copiarPortapapeles(){                  //función que copia el texto del textArea encriptado
    
    var inputEncriptado = document.querySelector("#inputEncriptado");
    inputEncriptado.focus();                    //pone el foco en el textArea.
    document.execCommand ("selectAll");         //selecciona todo el texto del textArea.
    document.execCommand ("copy");              //copia el texto del textArea.
    message.innerHTML = "Copiado";              //se envía un mensaje al usuario para que sepa que se copió el texto.
    setTimeout(() => {
        message.innerHTML="";                   //quita el mensaje de copiado en 3 segundos.
    }, 3000);
};


var buttonEncriptar = document.querySelector("#encriptar");
buttonEncriptar.onclick = encriptar;

var buttonDesencriptar = document.querySelector("#desencriptar");
buttonDesencriptar.onclick = desencriptar;

var buttonCopiar = document.querySelector("#copiar");
buttonCopiar.onclick = copiarPortapapeles;

const message = document.querySelector("#message");


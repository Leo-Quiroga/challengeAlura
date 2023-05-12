
var inputHTML = document.querySelector("#inputTexto");//se trae el textArea donde el usuario pone el texto que quiere encriptar HTML a javascript.
inputHTML.focus();

var textoEncriptado = "";

var inputEncriptado = document.querySelector("#inputEncriptado"); //Se trae el textArea ya encriptada


function encriptar() {                      //función que encripta el texto.

    let textoArray = inputHTML.value;

    if (textoArray == false) {
        alert("Por favor ingrese el texto");       //alert que indica que no hay texto para encriptar o desencriptar
    } else {

        textoArray = textoArray.split('');

        for (let i = 0; i < textoArray.length; i++) { // El For contiene un switch que hace el encriptado


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

        var dibujoDesaparece = document.getElementById('desaparecer');  //desaparece el dibujo y el textode abajo
        dibujoDesaparece.style.opacity = "0";

        var botonCopiarAparece = document.getElementById('copiar');     // aparece el botón copiar
        botonCopiarAparece.style.opacity = "1";

    }
};

function desencriptar() {                           //función que desencripta el texto.

    let textoArray = inputHTML.value;

    if (textoArray == false) {
        alert("Por favor ingrese el texto");       //alert que indica que no hay texto para encriptar o desencriptar
    } else {

        textoArray = textoArray.split('');

        for (let i = 0; i < textoArray.length; i++) {  // El For contiene un switch que hace el desencriptado


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

        var dibujoDesaparece = document.getElementById('desaparecer');  //desaparece el dibujo y el textode abajo
        dibujoDesaparece.style.opacity = "0";

        var botonCopiarAparece = document.getElementById('copiar');     // aparece el botón copiar
        botonCopiarAparece.style.opacity = "1";

    }
}

function copiarPortapapeles() {                  //función que copia el texto del textArea encriptado

    let contenidoEncriptado = inputEncriptado.value;

    inputEncriptado.focus();                    //pone el foco en el textArea.
    document.execCommand("selectAll");         //selecciona todo el texto del textArea.

    if (contenidoEncriptado == false) {
        alert("No hay nada para copiar")
    } else {
        document.execCommand("copy");              //copia el texto del textArea.
    }

    mensajeCopiado.value = "Copiado";                  //se Cambia el texto del botón para que sepa que se copió el texto.
    setTimeout(() => {
        mensajeCopiado.value = "Copiar";                // vuelve a poner Compiar.
    }, 3000);

};


var buttonEncriptar = document.querySelector("#encriptar");
buttonEncriptar.onclick = encriptar;

var buttonDesencriptar = document.querySelector("#desencriptar");
buttonDesencriptar.onclick = desencriptar;

var buttonCopiar = document.querySelector("#copiar");
buttonCopiar.onclick = copiarPortapapeles;

const mensajeCopiado = document.querySelector("#copiar");



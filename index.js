
var inputHTML = document.querySelector("#inputTexto");//se trae el textArea donde el usuario pone el texto que quiere encriptar HTML a javascript.
inputHTML.focus();
var textoEncriptado = "";
var inputEncriptado = document.querySelector("#inputEncriptado"); //Se trae el textArea ya encriptada

function encriptar() {                      //función que encripta el texto.
    let textoArray = inputHTML.value;
    if (textoArray == false) {
        inputHTML.placeholder = "No ha ingresado texto. Ingrese el texto aquí." // indica que no hay texto para encriptar o desencriptar
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
        var botonCopiarAparece = document.getElementById('animacionBoton');     // aparece el botón copiar
        botonCopiarAparece.style.opacity = "1";
        dibujoDesaparece.style.transition = "0s";    //hacen que la trancisión de areaencriptada vuelva a 0
        var animaciónBoton = document.getElementById('animacionBoton');
        animaciónBoton.style.transition = "2s";
    }
};

function desencriptar() {                           //función que desencripta el texto.
    let textoArray = inputHTML.value;
    if (textoArray == false) {
        inputHTML.placeholder = "No ha ingresado texto. Ingrese el texto aquí." // indica que no hay texto para encriptar o desencriptar
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
        var botonCopiarAparece = document.getElementById('animacionBoton');     // aparece el botón copiar
        botonCopiarAparece.style.opacity = "1";
        dibujoDesaparece.style.transition = "0s";    //hacen que la trancisión de areaencriptada vuelva a 0
        var animaciónBoton = document.getElementById('animacionBoton');
        animaciónBoton.style.transition = "2s";
    }
}

function copiarPortapapeles() {                  //función que copia el texto del textArea encriptado
    inputEncriptado.focus();                    //pone el foco en el textArea.
    document.execCommand("selectAll");         //selecciona todo el texto del textArea.
    document.execCommand("copy");              //copia el texto del textArea.
    mensajeCopiado.value = "Copiado";                  //se Cambia el texto del botón para que sepa que se copió el texto.

    setTimeout(() => {
        mensajeCopiado.value = "Copiar";                // vuelve a poner Compiar.
    }, 3000);
    inputEncriptado.value = "";
    setTimeout(() => {
        var dibujoDesaparece = document.getElementById('desaparecer');  //aparece el dibujo y el textode abajo
        dibujoDesaparece.style.transition = "2s"                        //con animación para que se vea una transición
        dibujoDesaparece.style.opacity = "1";
    }, 1000);
    var botonCopiarAparece = document.getElementById('animacionBoton');     // desaparece el botón copiar
    botonCopiarAparece.style.transition = "1.5s"                            // con a nimación para que se vea una transición
    botonCopiarAparece.style.opacity = "0";
};

var buttonEncriptar = document.querySelector("#encriptar");
buttonEncriptar.onclick = encriptar;                                    //ejecuta función encriptar cuando se da click en el botón
var buttonDesencriptar = document.querySelector("#desencriptar");
buttonDesencriptar.onclick = desencriptar;                              //ejecuta función desencriptar cuando se da click en el botón
var buttonCopiar = document.querySelector("#copiar");
buttonCopiar.onclick = copiarPortapapeles;                              //ejecuta función copiar cuando se da click en el botón
const mensajeCopiado = document.querySelector("#copiar");               //trae copiar para luego cambiar value cuando se ejecuta copiar




var inputHTML = document.querySelector("#inputTexto");//se trae el textArea donde el usuario pone el texto que quiere encriptar HTML a javascript.
inputHTML.focus();
var textoEncriptado = "";

function encriptar() {                      //función que encripta el texto.
    let textoArray = inputHTML.value;
    if (textoArray == false) {
        inputHTML.placeholder = "No ha ingresado texto."; // indica que no hay texto para encriptar o desencriptar
        setTimeout(() => {
            inputHTML.placeholder = "Ingrese el texto aquí.";                // devuelve el place holder original
        }, 1500);
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
        
        textoEncriptado = textoArray.join('');          //Une las letras para que aparezcan en el textarea de la Derecha
        inputHTML.value = "";                           //limpia el textArea una vez se encripta
        
        document.getElementById('inputEncriptado').innerText = textoEncriptado; //imprime el texto encriptado en el área 2
        
        var displayEncriptado =document.getElementById("inputEncriptado"); //devuelve el p encriptado a su lugar
        displayEncriptado.style.display= "block";

        var dibujoDesaparece = document.getElementById('desaparecer');  //desaparece el dibujo y el textode abajo
        dibujoDesaparece.style.opacity = "0";
        dibujoDesaparece.style.position = "fixed"; //corre el div que desaparece al encriptar o desencriptar
        dibujoDesaparece.style.left="100rem";  //corre el div que desaparece al encriptar o desencriptar

        var botonCopiarAparece = document.getElementById('animacionBoton');     // aparece el botón copiar
        botonCopiarAparece.style.opacity = "1";

        dibujoDesaparece.style.transition = "0s";    //hacen que la trancisión de areaencriptada vuelva a 0
        var animacionBoton = document.getElementById('animacionBoton');
        animacionBoton.style.transition = "2s";
        mensajeCopiado.style.cursor = "pointer";

        var positionBoton = document.querySelector("#animacionBoton"); //da posición relative al boton copiar para que aparezca dentro del area encriptada
        positionBoton.style.position = "relative";
             
    }
};

function desencriptar() {                           //función que desencripta el texto.
    let textoArray = inputHTML.value;
    if (textoArray == false) {
        inputHTML.placeholder = "No ha ingresado texto."; // indica que no hay texto para encriptar o desencriptar
        setTimeout(() => {
            inputHTML.placeholder = "Ingrese el texto aquí.";                // devuelve el place holder original
        }, 1500);
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

        textoEncriptado = textoArray.join('');  //Une las letras para que aparezcan en el textarea de la Derecha 
        inputHTML.value = "";                   //Limpia el textarea de la izquierda
         
        document.getElementById('inputEncriptado').innerText = textoEncriptado; //imprime el texto encriptado en el área 2
        var displayEncriptado =document.getElementById("inputEncriptado"); //devuelve el p encriptado a su lugar
        displayEncriptado.style.display= "block";

        var dibujoDesaparece = document.getElementById('desaparecer');  //desaparece el dibujo y el textode abajo
        dibujoDesaparece.style.opacity = "0";
        dibujoDesaparece.style.position = "fixed"; //corre el div que desaparece al encriptar o desencriptar
        dibujoDesaparece.style.left="100rem";  //corre el div que desaparece al encriptar o desencriptar

        var botonCopiarAparece = document.getElementById('animacionBoton');     // aparece el botón copiar
        botonCopiarAparece.style.opacity = "1";    

        dibujoDesaparece.style.transition = "0s";    //hacen que la trancisión de areaencriptada vuelva a 0
        var animacionBoton = document.getElementById('animacionBoton');
        animacionBoton.style.transition = "2s";
        mensajeCopiado.style.cursor = "pointer";

        var positionBoton = document.querySelector("#animacionBoton"); //da posición relative al boton copiar para que aparezca dentro del area encriptada
        positionBoton.style.position = "relative";
    
    }
}

function copiarPortapapeles() {                //función que copia el texto del textArea encriptado
       
    // Selecciona el elemento <p> por su id
    var p = document.getElementById("inputEncriptado");

    // Obtiene el contenido de texto del elemento <p>
    var texto = p.textContent;

    // Crea un elemento de textarea oculto para poder copiar el texto
    var textarea = document.createElement("textarea");
    textarea.value = texto;
    textarea.style.position = "fixed";
    textarea.style.opacity = 0;
    document.body.appendChild(textarea);

    // Selecciona el texto en el elemento de textarea
    textarea.select();

    // Copia el texto al portapapeles
    document.execCommand("copy");

    // Elimina el elemento de textarea
    document.body.removeChild(textarea);

    document.getElementById('inputEncriptado').innerText = ""; //limpia el área del encriptado

    var displayEncriptado =document.getElementById("inputEncriptado");
    displayEncriptado.style.display= "none";

    mensajeCopiado.value = "Copiado";          //se Cambia el texto del botón para que sepa que se copió el texto.

    setTimeout(() => {
        mensajeCopiado.value = "Copiar";                // vuelve a poner Compiar.
        var positionBoton = document.querySelector("#animacionBoton"); // retoma posición fixed del boton copiar
    positionBoton.style.position = "fixed";
    }, 1500);    
        
    inputEncriptado.value = "";

        var dibujoDesaparece = document.getElementById('desaparecer');  //aparece el dibujo y el textode abajo
        dibujoDesaparece.style.transition = "0s"                        //con animación para que se vea una transición
        dibujoDesaparece.style.opacity = "1";

        dibujoDesaparece.style.position = "relative"; //vuelve a ubicar el div desaparecer
        dibujoDesaparece.style.left="0";   //vuelve a ubicar el div desaparecer

    var botonCopiarAparece = document.getElementById('animacionBoton');     // desaparece el botón copiar
    botonCopiarAparece.style.transition = "1.5s"                            // con a nimación para que se vea una transición
    botonCopiarAparece.style.opacity = "0";
    mensajeCopiado.style.cursor = "auto";

    inputHTML.focus();
    
};

var buttonEncriptar = document.querySelector("#encriptar");
buttonEncriptar.onclick = encriptar;                                    //ejecuta función encriptar cuando se da click en el botón
var buttonDesencriptar = document.querySelector("#desencriptar");
buttonDesencriptar.onclick = desencriptar;                              //ejecuta función desencriptar cuando se da click en el botón
var buttonCopiar = document.querySelector("#copiar");
buttonCopiar.onclick = copiarPortapapeles;                              //ejecuta función copiar cuando se da click en el botón
var mensajeCopiado = document.querySelector("#copiar");               //trae copiar para luego cambiar value cuando se ejecuta copiar





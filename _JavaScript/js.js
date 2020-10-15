/*Chamade de todos Id e atribuição às variaveis*/

var Empr = window.document.getElementById('Empresa');

var texto_1 = window.document.getElementById('texto_1');

var texto_2 = window.document.getElementById('texto_2');

var texto_3 = window.document.getElementById('texto_3');

var hor = window.document.getElementById('horas');



/*Funções de trocar icones*/
function mostrar_1() {
    Empr.src = "_Logo/serviço.png"
}

function mostrar_2() {
    Empr.src = "_Logo/curso.png"
}

function mostrar_3() {
    Empr.src = "_Logo/multimidia-2.png"
}

function mostrar_4() {
    Empr.src = "_Logo/phone.png"
}

function fotoAnterior() {
    Empr.src = "_Logo/home.png"
}


/*Funções de  mostrar texto nas imagens aside*/
function mostrarTexto_1() {
    texto_1.style.display = "Block"
}

function mostrarTexto_2() {
    texto_2.style.display = "Block"
}

function mostrarTexto_3() {
    texto_3.style.display = "Block"
}
//essa função ocultará o texto assim que se terar o mouse d imagem

function ocultarTexto() {
    texto_3.style.display = "none"
    texto_2.style.display = "none"
    texto_1.style.display = "none"
}
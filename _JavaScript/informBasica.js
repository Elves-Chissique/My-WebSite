/*Chamade de todos Id e atribuição às variaveis*/
var Empr = window.document.getElementById('Empresa');

var texto_1 = window.document.getElementById('texto_1');

var texto_2 = window.document.getElementById('texto_2');

var texto_3 = window.document.getElementById('texto_3');

var nomeCurso = window.document.getElementById('nomeCurso');

var preco = window.document.getElementById('preco');    

var sistema = window.document.getElementById('span6');

var preco = window.document.getElementById('preco');  


/*Area das função da trocados icones*/
function mostrar_1() {
    Empr.src = "../_Logo/serviço.png"
}

function mostrar_2() {
    Empr.src = "../_Logo/curso.png"
}
														// Essa parte das Funçõe é comum, isto é todas paginas tem.
function mostrar_3() {
    Empr.src = "../_Logo/multimida.png"					// Essa parte das Funçõe é comum, isto é todas paginas tem.
}

function mostrar_4() {
    Empr.src = "../_Logo/phone.png"
}

function fontoAnterior() {
    Empr.src = "../_Logo/home.png"
}

//Area das funções da apriçào da informação dos cursos  

function chamada1() {
    var fixed = document.getElementById('fixed');
    fixed.style.display = "block";
    document.getElementById('center').src = "../_Imagens/windows10.png"
    document.querySelector('#separador').style.display = "block"
    preco.innerText = "1200 Mt"
    sistema.innerText = "window-10"
    nomeCurso.innerText = "Informática Básica"
}

function chamada2() {
    var fixed = document.getElementById('fixed');
    fixed.style.display = "block";
    document.getElementById('center').src = "../_Imagens/window-7.png";
    document.querySelector('#separador').style.display = "block";
    sistema.innerText = "window-7"
    preco.innerText = "1200 Mt"
    nomeCurso.innerText = "Informática Básica"
}

function chamada3() {
    var fixed = document.getElementById('fixed');
    fixed.style.display = "block";
    document.getElementById('center').src = "../_Imagens/apple.png";
    document.querySelector('#separador').style.display = "block";
    sistema.innerText = "MacOS-X"
    preco.innerText = "1350 Mt"
    nomeCurso.innerText = "Informática Básica"
}

function chamada4() {
    var fixed = document.getElementById('fixed');
    fixed.style.display = "block";
    document.getElementById('center').src = "../_Imagens/linux.png";
    document.querySelector('#separador').style.display = "block";
    sistema.innerText = "Linux"
    preco.innerText = "1350 Mt"
    nomeCurso.innerText = "Informática Básica"
}

function chamada5() {
    var fixed = document.getElementById('fixed');
    fixed.style.display = "block";
    document.getElementById('center').src = "../_Imagens/digitacao.png";
    document.querySelector('#separador').style.display = "block";
    sistema.innerText = "-"
    preco.innerText = "1000 Mt"
    nomeCurso.innerText = "Informática Básica"
}

function chamada6() {
    var fixed = document.getElementById('fixed');
    fixed.style.display = "block";
    document.getElementById('center').src = "../_Imagens/windows-10.png";
    document.querySelector('#separador').style.display = "block";
    sistema.innerText = "windows-10"
    preco.innerText = "1700 Mt"
    nomeCurso.innerText = "Informática Avançada"
}

function chamada7() {
    var fixed = document.getElementById('fixed');
    fixed.style.display = "block";
    document.getElementById('center').src = "../_Imagens/design.png";
    document.querySelector('#separador').style.display = "block";
    sistema.innerText = "-"
    preco.innerText = "1700 Mt"
    nomeCurso.innerText = "Gereciamento de Projectos"
}


function ocultarTudo(){
    fixed.style.display = "none";
    separador.style.display="none"
}


/*Trocando o Icone de fechar (X)*/
function trocarIcone(){
	window.document.getElementById('apagar').src = "../_Imagens/apagar-2.png";
}

function voltarIcone(){
	window.document.getElementById('apagar').src = "../_Imagens/apagar.png";
}



/*Aqui Termina a parte de funcionalidade da pagina - Curos de programação*/

/*NB: Nessa parte começa a funcionalidade  de uma outra pagina(Curso Redes)...*/




/*Aqui termina a parte da funcionalidade da pagina - Curso de Redes*/

/*Aqui Começa a parte da funcionalidade da pagina de - Informatica Básica*/
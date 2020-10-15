/*Chamade de todos Id e atribuição às variaveis*/
var Empr = window.document.getElementById('Empresa');

var texto_1 = window.document.getElementById('texto_1');

var texto_2 = window.document.getElementById('texto_2');

var texto_3 = window.document.getElementById('texto_3');

var hor = window.document.getElementById('horas');


/*Area das função da trocados icones*/
function mostrar_1() {
    Empr.src = "../_Logo/serviço.png"
}

function mostrar_2() {
    Empr.src = "../_Logo/curso.png"
}
                                                        // Essa parte das Funçõe é comum, isto é todas paginas tem.
function mostrar_3() {
    Empr.src = "../_Logo/multimida.png"                 // Essa parte das Funçõe é comum, isto é todas paginas tem.
}

function mostrar_4() {
    Empr.src = "../_Logo/phone.png"
}

function fontoAnterior() {
    Empr.src = "../_Logo/home.png"
}

//Area das funções da apriçào da informação dos cursos  

function css3() {
    var fixed = document.getElementById('fixed');
    fixed.style.display = "block";
    document.getElementById('center').src = "../_Imagens/css.png"
    document.querySelector('#separador').style.display = "block"
}

function js() {
    var fixed = document.getElementById('fixed');
    fixed.style.display = "block";
    document.getElementById('center').src = "../_Imagens/js.png"
    document.querySelector('#separador').style.display = "block"
    document.getElementById('textoImagens').src = "../_Imagens/texto-js.png"

}

function point() {
    var fixed = document.getElementById('fixed');
    fixed.style.display = "block";
    document.getElementById('center').src = "../_Imagens/power-point.png";
    document.querySelector('#separador').style.display = "block";
    document.getElementById('textoImagens').src = "../_Imagens/power-p.png";
}

function ocultarTudo() {
    document.getElementById('fixed').style.display = "none";
    document.querySelector('#separador').style.display = "none" ;
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
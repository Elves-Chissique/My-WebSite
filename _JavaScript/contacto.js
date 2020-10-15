/*Chamade de todos Id e atribuição às variaveis*/

var Empr = window.document.getElementById('Empresa');

var texto_1 = window.document.getElementById('texto_1');

var texto_2 = window.document.getElementById('texto_2');

var texto_3 = window.document.getElementById('texto_3');

var hor = window.document.getElementById('horas');
var confirm = window.document.getElementById('checkbox1');


/*Função de de chamade hors*/

/*
var a = new Date;

var horas = a.getDay();
var minut = a.getMonth();
var segun = a.getFullYear();


hor.innerHTML=`${horas}-${minut}-${segun}`;
*/




/*Funções de trocar icones*/
function mostrar_0() {
    Empr.src = "../_Logo/home.png"
}

function mostrar_1() {
    Empr.src = "../_Logo/serviço.png"
}


function mostrar_2() {
    Empr.src = "../_Logo/curso.png"
}


function mostrar_3() {
    Empr.src = "../_Logo/multimida.png";
}


function mostrar_4() {
    Empr.src = "../_Logo/phone.png";
}



function fotoAnterior() {
    Empr.src = "../_Logo/phone.png";
}
/*Verficação de  checkboxs*/

var p = document.querySelectorAll('option').checked;

p.addEventListner('click', oc);

function oc() {
    alert('ok')
}

if (x.checked) {
    function abrir() {
        document.getElementById('idSelct1').style.display = "block";
        document.getElementById('interior1').style.backgroundColor = "aqua";
        document.getElementById('p1').style.display = "none";
    }
}



function abrir2() {
    document.getElementById('idSelct2').style.display = "block";
    document.getElementById('interior2').style.backgroundColor = "aqua";
    document.getElementById('p2').style.display = "none";

}


/*Are de interção de redes Socias*/

function email() {
    document.getElementById('notificacao').style.display = "block";
    document.getElementById('resultado').innerHTML = `Você Escolheu o <b>Email</b> como sua plataforma de receber nossas novidades<br> Informe a baixo o seu Email`
}


function facebook() {
    document.getElementById('notificacao').style.display = "block";
    document.getElementById('resultado').innerHTML = `Você Escolheu o <b>Facebook</b> como sua plataforma de receber nossas novidades<br> Informe a baixo o seu nome do facebook`
}

function instagram() {
    document.getElementById('notificacao').style.display = "block";
    document.getElementById('resultado').innerHTML = `Você Escolheu o <b>Instagram</b> como sua plataforma de receber nossas novidades<br> Informe a baixo o seu nome do instagrm`
}

function facebook1() {
    document.getElementById('notificacao').style.display = "block";
    document.getElementById('resultado').innerHTML = `Você Escolheu o <b>Email</b> como sua plataforma de receber nossas novidades<br> Informe a baixo o seu Email`
}
/*Essa Parte estou chamando os ids necessários e atribuindo-os aos respactivos variavéis*/
    //Chamando as divs que contém fotos de  slides
    var result1 = window.document.getElementById('resultado-1');
    var trocaTexto = window.document.getElementById('trocaTexto')
    var backgr= window.document.getElementById('d');   
    var bdy= window.document.getElementById('bdy');
    var desenv = window.document.getElementById('desenv');

    //Chamando id de divs de informação
    var Info1 =document.getElementById('Info_1');
    var Info2 =document.getElementById('Info_2');
    var Info33 =document.getElementById('Info_33');
    var Info44 =document.getElementById('Info_44');
    var Info55 =document.getElementById('Info_55');
    var Info66 =document.getElementById('Info_66');            
    var pagp1 =document.getElementById('pagp1'); 
    var pagp2 =document.getElementById('pagp2'); 
    //Chamada de ids das janeslas de preços

    let esquerda = document.getElementById('esquerda')   // onclick --> vamos_2() 
    let direita = document.getElementById('direita')    // onclick --> vamos()
    let Info_1 = document.getElementById('Info_1')
    let Info_2 = document.getElementById('Info_2')
    let serv2 = document.getElementById('serv2')
    let Info22 = window.document.getElementById('Info_22')
    
    /*Area das função da trocados icones*/
    function mostrar_0() {
        Empr.src = "../_Logo/serviço.png"
    }

    function mostrar_1() {
        Empr.src = "../_Logo/serviço.png"
    }

    function mostrar_2() {
        Empr.src = "../_Logo/curso.png"
    }
                                                // Essa parte das Funçõe é comum, isto é todas paginas tem.
    function mostrar_3() {
        Empr.src = "../_Logo/multimida.png"      // Essa parte das Funçõe é comum, isto é todas paginas tem.
    }

    function mostrar_4() {
        Empr.src = "../_Logo/phone.png"
    }

    function fontoAnterior() {
        Empr.src = "../_Logo/home.png"
    }

// funções de controlar setas
    function vamos(){
        Info_1.style.display = 'none'
        Info_2.style.display = 'block'
        //serv2.style.backgroundColor = '#000500'
    }
    
    function vamos_2(){
        Info_1.style.display = 'block'
        Info_2.style.display = 'none'
    }
// Termina aqui as funções de controlar setas

    
    function resul_1(){
            //DIVs quue contém fotos de slides
        result1.style.display = "block";
        serv2.style.backgroundColor = '#000'
        backgr.style.backgroundColor = '#000'
        bdy.style.backgroundColor = '#555'
        pagp1.style.backgroundColor = '#555'
        pagp2.style.backgroundColor = '#555'
        pagp1.style.color = '#fff'
        pagp2.style.color = '#fff'
        desenv.style.backgroundColor='#555'

            //DIVs das informações sobre os servicos
        Info1.style.display = "block"
        Info2.style.display = "none"
        Info22.style.display = 'none'
        Info33.style.display = 'none'
        Info44.style.display = 'none'
        Info55.style.display = 'none'
        Info66.style.display = 'none'
        trocaTexto.innerHTML = ` Desenvolvemos Sites Reponsivos com as ultímas
                                 tendênçias de web-design, compatíveis com 
                                 dispositivos moveis e motores de Pesquisa,
                                 edição de contéudos simplificada.
                        <br/><br/>
                                Realizamos também manuteção de sites Aplicando
                                 as recentes tecnologias e deixando - os modernos`
    }

//****************************Fim de primeiro function => result_1***************************
    function resul_2(){
            //DIVs de que contém fotos de slides
        result1.style.display = "block"
        serv2.style.backgroundColor = '#555fff'
        backgr.style.backgroundColor = '#555fff'   //#2facec
        bdy.style.backgroundColor = '#000'
        pagp1.style.backgroundColor = '#000'
        pagp2.style.backgroundColor = '#000'
        pagp1.style.color = '#fff'
        pagp2.style.color = '#fff'
        desenv.style.backgroundColor='#000'
            //DIVs de informação
        Info1.style.display = "none"
        Info22.style.display = "block"
        Info33.style.display = 'none'
        Info44.style.display = 'none'
        Info55.style.display = 'none'
        Info66.style.display = 'none'
    }
    
//****************************Fim de primeiro function => result_2***************************
    function resul_3(){
        result1.style.display = "block";
        serv2.style.backgroundColor = '#2facec'
        backgr.style.backgroundColor = '#2facec'
        bdy.style.backgroundColor = '#555'
        pagp1.style.backgroundColor = '#555'
        pagp2.style.backgroundColor = '#555'
        pagp1.style.color = '#fff'
        pagp2.style.color = '#fff'
        desenv.style.backgroundColor='#555'
            //DIVs de informação
        Info1.style.display = "none"
        Info22.style.display = "none"
        Info33.style.display = 'block'
        Info44.style.display = 'none'
        Info55.style.display = 'none'
        Info66.style.display = 'none'
    }

//****************************Fim de primeiro function => result_3***************************
    function resul_4(){
        result1.style.display = "block";
        serv2.style.backgroundColor = '#dca6ac'
        backgr.style.backgroundColor = '#dca6ac'
        bdy.style.backgroundColor = '#000'
        pagp1.style.backgroundColor = '#000'
        pagp2.style.backgroundColor = '#000'
        pagp1.style.color = '#fff'
        pagp2.style.color = '#fff'
        desenv.style.backgroundColor='#000'
            //DIVs de informação
        Info1.style.display = "none"
        Info22.style.display = "none"
        Info33.style.display = 'none'
        Info44.style.display = 'block'
        Info55.style.display = 'none'
        Info66.style.display = 'none'
        trocaTexto.style.transition = 'all 4s'
        trocaTexto.innerHTML = `Desenvolvimento de Aplicação para Smartphones
                                Apple e Android, Aplicação para computadores. 
                                Com design profissional, com funcionalidades 
                                específicas para vários setores de actividade,
                                push de notificação, marcações, vendas, encomendas
                                entre outras funcionalidades`;
    }

//****************************Fim de primeiro function => result_4***************************
    function resul_5(){
        result1.style.display = "block";
        serv2.style.backgroundColor = '#b6b8de'
        backgr.style.backgroundColor = '#b6b8de'
        bdy.style.backgroundColor = '#555'
        pagp1.style.backgroundColor = '#555'
        pagp2.style.backgroundColor = '#555'
        pagp1.style.color = '#fff'
        pagp2.style.color = '#fff'
        desenv.style.backgroundColor='#555'
            //DIVs de informação
        Info1.style.display = "none"
        Info22.style.display = "none"
        Info33.style.display = 'none'
        Info44.style.display = 'none'
        Info55.style.display = 'block'
        Info66.style.display = 'none'
         trocaTexto.innerHTML = `Desenvolvimento de lojas online
                                 de façil gestão, com pagamentos 
                                 por cartão de crédito e multibancocompatíves
                                  com dispositivos moveis...`
    }
    
//****************************Fim de primeiro function => result_4***************************   
    function resul_6(){
        result1.style.display = "block";
        serv2.style.backgroundColor = '#a2b673'
        backgr.style.backgroundColor = '#a2b673'
        bdy.style.backgroundColor = '#000'
        pagp1.style.backgroundColor = '#000'
        pagp2.style.backgroundColor = '#000'
        pagp1.style.color = '#fff'
        pagp2.style.color = '#fff'
        desenv.style.backgroundColor='#000'
            //DIVs de informação
        Info1.style.display = "none"
        Info22.style.display = "none"
        Info33.style.display = 'none'
        Info44.style.display = 'none'
        Info55.style.display = 'none'
        Info66.style.display = 'block'
        trocaTexto.innerHTML = `Personalize o email da sua empresa. Exemplo:
         email@suaempresa.com dê mais credibilidade a sua empresa com  email corporativo.`
    }
    
    
/* *********************---------Aqui começa os Scritps para contactos-------***************************/
    
    
    var sim = window.document.getElementById('sim');
    var nao = window.document.getElementById('nao');
    var cor = window.document.getElementById('spanCor');

/*******************************Parte de Eventos ao clikar**********************************/
        sim.addEventListener('click', mostrou)
        nao.addEventListener('click', ocultou)

    function mostrou(){
        cor.style.visibility = 'visible'
    }

    function ocultou(){
        cor.style.visibility = 'hidden'
    }

/*Essa Parte estou chamando os ids necessários e atribuindo-os aos respactivos variavéis*/
	//Chamando as divs que contém fotos de  slides
	var result1 = window.document.getElementById('resultado-1');
	var result2 = window.document.getElementById('resultado-2');
	var result3 = window.document.getElementById('resultado-3');
	var result4 = window.document.getElementById('resultado-4');
	var result5 = window.document.getElementById('resultado-5');
	var result6 = window.document.getElementById('resultado-6');
	var backgr= window.document.getElementById('background');   
	var bdy= window.document.getElementById('bdy');

	
	//Chamando id de divs de informação
	var Info1 =document.getElementById('Info_1');
	var Info2 =document.getElementById('Info_2');
	var Info33 =document.getElementById('Info_33');
	var Info44 =document.getElementById('Info_44');
	var Info55 =document.getElementById('Info_55');
	var Info66 =document.getElementById('Info_66');
	//Chamada de ids das janeslas de preços

	let esquerda = document.getElementById('esquerda')   // onclick --> vamos_2() 
	let direita = document.getElementById('direita')    // onclick --> vamos()
	let Info_1 = document.getElementById('Info_1')
	let Info_2 = document.getElementById('Info_2')
	let serv2 = document.getElementById('serv2')
	let Info22 = window.document.getElementById('Info_22')
	



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
		result2.style.display = "none";
		result3.style.display = "none";
		result4.style.display = "none";
		result5.style.display = "none";
		result6.style.display = "none";
		serv2.style.backgroundColor = '#000555'
		backgr.style.backgroundColor = 'aqua'
		bdy.style.backgroundColor = '#79604f'

			//DIVs das informações sobre os servicos
		Info1.style.display = "block"
		Info2.style.display = "none"
		Info22.style.display = 'none'
		Info33.style.display = 'none'
		Info44.style.display = 'none'
		Info55.style.display = 'none'
		Info66.style.display = 'none'
	}

//****************************Fim de primeiro function => result_1***************************
	function resul_2(){
			//DIVs de que contém fotos de slides
		result1.style.display = "none";
		result2.style.display = "block";
		result3.style.display = "none";
		result4.style.display = "none";
		result5.style.display = "none";
		result6.style.display = "none";
		serv2.style.backgroundColor = '#555fff'
		backgr.style.backgroundColor = '#a4bcc4'
		bdy.style.backgroundColor = '#000'
	
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
		result1.style.display = "none";
		result2.style.display = "none";
		result3.style.display = 'block'
		result4.style.display = "none";
		result5.style.display = "none";
		result6.style.display = "none";
		serv2.style.backgroundColor = '#555fff'
		backgr.style.backgroundColor = '#2facec'
		bdy.style.backgroundColor = '#79604f'

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
		result1.style.display = "none";
		result2.style.display = "none";
		result3.style.display = 'none'
		result4.style.display = "block";
		result5.style.display = "none";
		result6.style.display = "none";
		serv2.style.backgroundColor = '#dca6ac'
		backgr.style.backgroundColor = '#999696'
		bdy.style.backgroundColor = '#000'

			//DIVs de informação
		Info1.style.display = "none"
		Info22.style.display = "none"
		Info33.style.display = 'none'
		Info44.style.display = 'block'
		Info55.style.display = 'none'
		Info66.style.display = 'none'
	}

//****************************Fim de primeiro function => result_4***************************
	function resul_5(){
		result1.style.display = "none";
		result2.style.display = "none";
		result3.style.display = 'none'
		result4.style.display = "none";
		result5.style.display = "block";
		result6.style.display = "none";
		serv2.style.backgroundColor = '#b6b8de'
		backgr.style.backgroundColor = '#999696'
		bdy.style.backgroundColor = '#79604f'

			//DIVs de informação
		Info1.style.display = "none"
		Info22.style.display = "none"
		Info33.style.display = 'none'
		Info44.style.display = 'none'
		Info55.style.display = 'block'
		Info66.style.display = 'none'
	}
	
//****************************Fim de primeiro function => result_4***************************	
	function resul_6(){
		result1.style.display = "none";
		result2.style.display = "none";
		result3.style.display = 'none'
		result4.style.display = "none";
		result5.style.display = "none";
		result6.style.display = "block";
		serv2.style.backgroundColor = '#a2b673'
		backgr.style.backgroundColor = '#999696'
		bdy.style.backgroundColor = '#000'

			//DIVs de informação
		Info1.style.display = "none"
		Info22.style.display = "none"
		Info33.style.display = 'none'
		Info44.style.display = 'none'
		Info55.style.display = 'none'
		Info66.style.display = 'block'
	}
	
	
	
	
	
	
	
	
	
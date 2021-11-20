// Menu lateral navegação



// Verificação de senhha

conferir_id = function(obj){
    return document.getElementById(obj);
}

window.onload = function() {
    document.getElementById("cadastro-unidade").onsubmit = tratarCamposAvancado;
}

//Seleção do menu
list = document.querySelectorAll('.item-menu')

for (let i = 0; i < list.length; i++){
    list[i].onclick = function(){
         let j = 0;
         while(j < list.length){
             list[j++].className='item-menu'
         }
         list[i].className='item-menu active-item-menu'
    }
}



tratarCamposAvancado = function() {
	var temErro = false;
	var camposErro = "";
	var campos = new Array("nome", "codigo-postal","estado-sub-div1", "estado-sub-div2",  "contato","natureza","estabelecimento" );
		
	for(x = 0; x < campos.length; x++) {
		if (document.getElementById(campos[x]).value=="") {
			camposErro = camposErro + campos[x] + ",";
			temErro = true;
		}		
	}
	
	if (temErro) {
        camposErro = camposErro.substr(0,camposErro.length-1);
        alert("O(s) campo(s) "+ camposErro +" é(são) obrigatório(s)");
    }else{
        alert("Dados cadastrados com sucesso!")
    }

}


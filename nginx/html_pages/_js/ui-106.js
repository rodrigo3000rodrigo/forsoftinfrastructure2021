
// Verificação de campos vazio

_$ = function(obj){
    return document.getElementById(obj);
}

window.onload = function() {
	_$("form1").onsubmit = tratarCamposAvancado;
}


tratarCamposAvancado = function() {	
	var temErro = false;
	var camposErro = "";
	var campos = new Array("nome", "sobrenome", "data_de_nascimento", "pais-de-origem",
	"subdivisão-1", "subdivisão-2", "logradouro-tipo", "logradouro-nome", "contato-ddi", "contato-numero", "email");
		
	for(x = 0; x < campos.length; x++) {
		if (_$(campos[x]).value=="") {
			camposErro = camposErro + campos[x] + ", ";
			temErro = true;
		}		
	}	
	
	if (temErro) {
		camposErro = camposErro.substr(0,camposErro.length-1);
		alert("O(s) campo(s) "+ camposErro +" é(são) obrigatório(s)!");
	}
	
	if(!temErro){
		alert("Dados alterados com sucesso!")
	}

	return !temErro;

}
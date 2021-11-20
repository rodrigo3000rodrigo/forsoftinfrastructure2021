validacao_senha = function(obj) {
	return document.getElementById(obj);
}

window.onload = function() {
	validacao_senha("form_senha").onsubmit = validacaoCampos;
}
// definição de variaveis usadas para esse script de validação

// var modalSuccess = document.querySelector("#modalcad");
var validacaosenha = true;

//funcçoes de validação  

validacaoCampos = (e) => {
	e.preventDefault();
	
	var validacaosenha = true;
	

	if (validacao_senha("senha_nova").value=="") {
		alert("Campo 'Nova Senha' está vazio");
		validacaosenha = false;
	}
	
	if (validacao_senha("senha_repetir").value=="") {
		alert("Campo 'Repetir Senha' está vazio");
		validacaosenha = false;
	}
	// verificação se as senhas coincidem e exibição do modal sucesso;
	// Obs: modal de campo não preenchido e de senhas erradas não incluso;
	if (validacaosenha == true) {
		if (validacao_senha("senha_nova").value !== validacao_senha("senha_repetir").value) {
			alert("As duas senhas devem ser iguais");
			validacaosenha = false;
		}
		// else { 
		// 	modalSuccess.style.display = "flex";
			
		// }

		// return validacaosenha;
		
	}

	if(validacaosenha == true){
        window.location.href = "/ui-004.html"
    }

	
	// return validacaosenha;

}





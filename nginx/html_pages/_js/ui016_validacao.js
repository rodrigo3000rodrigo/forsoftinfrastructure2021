validacao_senha = function(obj) {
	return document.getElementById(obj);
	
}

window.onload = function() {
	validacao_senha("form_senha").onsubmit = validacaoCampos;
}
// definição de variaveis usadas para esse script de validação

var modalSuccess = document.querySelector("#modal-senha");
var validacaosenha = true;

//funcçoes de validação  

validacaoCampos = function() {
	var validacaosenha = true;
	

	if (validacao_senha("nova-senha").value=="") {
		alert("Campo 'Nova Senha' está vazio");
		validacaosenha = false;
	}
	
	if (validacao_senha("repetir-nova-senha").value=="") {
		alert("Campo 'Repetir Senha' está vazio");
		validacaosenha = false;
	}
	// verificação se as senhas coincidem e exibição do modal sucesso;
	// Obs: modal de campo não preenchido e de senhas erradas não incluso;
	if (validacaosenha == true) {
		if (validacao_senha("nova-senha").value !== validacao_senha("repetir-nova-senha").value) {
			alert("As duas senhas devem ser iguais");
			validacaosenha = false;
		}
		else { 
			modalSuccess.style.display = "flex";
			
		}

		return validacaosenha;
		
	}
	
	return validacaosenha;

}
// função para "esconder o modal" de volta onclick no html
function disablesuccessModal() {
	
	modalSuccess.style.display = "none";
}





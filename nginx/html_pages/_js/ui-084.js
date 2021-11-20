// Verificação de senhha

window.onload = function() {
    document.getElementById("voltar").onclick = mensagem;
    document.getElementById("form-cadastrosupervisor").onsubmit = tratarCampos;

}

mensagem = function() {
    alert("Dados preenchidos não serão salvos");
}

tratarCampos = function() {
    var correto = true;

    if (document.getElementById("input1").value=="") {
        alert("Campo Nome vazio");
        correto = false;
        return correto;
    }
    if (document.getElementById("input2").value=="") {
        alert("Campo Sobrenome vazio");
        correto = false; 
        return correto;
    }

    if (document.getElementById("input3").value=="") {
        alert("Campo Código CIVA vazio");
        correto = false; 
        return correto;
    }

    if (document.getElementById("input4").value==""){
        alert("Campo Identidade vazio");
        correto = false; 
        return correto;
    }
    
    if (document.getElementById("input5").value==""){
        alert("Campo Data de nascimento vazio");
        correto = false; 
        return correto;
    }
    if (document.getElementById("input6").value==""){
        alert("Campo ID País vazio");
        correto = false; 
        return correto;
    
    }
    if (document.getElementById("select1").value=="") {
        alert("Selecione um País");
        correto = false;
        return correto;
    }
    if (document.getElementById("select2").value=="") {
        alert("Selecione um Estado");
        correto = false;
        return correto;
    }
    if (document.getElementById("select3").value=="") {
        alert("Selecione uma Cidade");
        correto = false;
        return correto;
    }
    if (document.getElementById("select4").value=="") {
        alert("Selecione um Logradouro");
        correto = false;
        return correto;
    }
    if (document.getElementById("input7").value==""){
        alert("Campo Logradouro vazio");
        correto = false; 
        return correto;
    }
    if (document.getElementById("input8").value==""){
        alert("Campo Contato vazio");
        correto = false; 
        return correto;
    }
    if (document.getElementById("input9").value==""){
        alert("Campo Contato vazio");
        correto = false; 
        return correto;
    }
    if (document.getElementById("input10").value==""){
        alert("Campo Email vazio");
        correto = false; 
        return correto;
    }
    
    return correto;
}
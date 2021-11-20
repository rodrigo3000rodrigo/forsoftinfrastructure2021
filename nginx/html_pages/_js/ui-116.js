// Menu lateral navegação
let list = document.querySelectorAll('.list');
for (let i = 0; i < list.length; i++) {
    list[i].onclick = function () {
        let j = 0;
        while (j < list.length) {
            list[j++].className = 'list';
        }
        list[i].className = 'list active';
    }
}

// Verificação de senhha

window.onload = function() {
    document.getElementById("botão").onclick = mensagem;
    document.getElementById("form1").onsubmit = tratarCampos;

}

mensagem = function () {
    alert("Cadastro Cancelado");
}

tratarCampos = function() {
    var correto = true;

    if (document.getElementById("país").value=="") {
        alert("Campo país está vazio.")
        correto = false;
    }

    if (document.getElementById("doc ps").value=="") {
        alert("Campo Documentação PC está vazio.")
        correto = false; 
    }

    if (document.getElementById("orgão").value==""){
        alert("Campo Orão de Saúde está vazio.")
    }
    
    if (document.getElementById("doc ps").value==""){
        alert("Campo Documentação Ps está vazio.")
    }
    return correto;
}
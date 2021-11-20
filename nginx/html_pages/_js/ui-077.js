window.onload = function () {
    _$("voltar").onclick = mensagem;
    _$("form-redefinirsenha").onsubmit = tratarCampo;
}


mensagem = function() {
    alert("Você vai ser redirecionado a página anterior");
}

tratarCampo = function() {
    var temErro = false;
    var camposErro = "";
    var campos = new Array("password", "password2");

    for (x = 0; x < campos.length; x++) {
        if (_$(campos[x]).value == "") {
            camposErro = camposErro + campos[x] + " , ";
            temErro = true;
        }
    }

    if (temErro) {
        camposErro = camposErro.substr(0,camposErro.length-1);
        alert("Campo Obrigatório não Preenchido");
    }
    else{
        alert("Senha Alterada com sucesso!")
    }
}
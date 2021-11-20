window.onload = function () {
    _$("butVoltar").onclick = mensagem;
    _$("form1").onsubmit = tratarCampo;
}


mensagem = function () {
    alert("Você vai ser redirecionado a página anterior");
}


tratarCampo = function () {
    var temErro = false;
    var camposErro = "";
    var campos = new Array("senha", "confirmar-senha");

    for (x = 0; x < campos.length; x++) {
        if (_$(campos[x]).value == "") {
            camposErro = camposErro + campos[x] + " , ";
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





window.onload = function() {
    document.getElementById("dados").onsubmit = tratarCamposAvancado;
}


tratarCamposAvancado = function() {
    let erro = false;
    var msg = "";
    let campos = new Array("nome", "sobrenome", "identidade", "data-nascimento", "cargo", "pais-de-origem", "subdivisao-1", "subdivisao-2", "logradouro", "contato", "email");

    for (i = 0; i < campos.length; i++) {

        if (document.getElementById(campos[i]).value == "") {
            msg = "" + msg + campos[i] + ",";
            erro = true;
        }

    }
    if (erro) {
        msg = msg.substr(0, msg.length - 1);
        alert("o(s) campo(s) " + msg + " é (são) obrigatório(s)");
    } else {
        alert("Senha alterada com sucesso!");
    }

    return !erro;
}
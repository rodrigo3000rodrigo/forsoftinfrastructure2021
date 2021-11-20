window.onload = function() {
    document.getElementById("button-adjust").onclick = tratarCamposAvancado;
}

tratarCamposAvancado = function() {
    var senha = document.getElementById("senha");
    var confirmasenha = document.getElementById("confirma-senha");
    var entradas = document.getElementsByClassName("input-default");
    var ok = true;

    for (var i = 0; i < entradas.length; i++) {
        if (!entradas[i].value) {
            ok = false;
        }
    }
    if (ok) {
        alert("Cadastro realizado com Sucesso!!");

    } else {
        alert("Você não preencheu todos os campos!!");

    }
}
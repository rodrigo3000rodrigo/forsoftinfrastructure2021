window.onload = function() {
    document.getElementById("alterar-senha").onsubmit = tratarCamposAvancado;
}
tratarCamposAvancado = function() {
    var senha = document.getElementById("nova-senha");
    var confirma = document.getElementById("confirma-senha");


    if (senha.value == '' || confirma.value == '') {
        alert("Algum campo está vazio.");
    } else if (senha.value.length < 6) {
        alert("Senha deve conter mais de 6 caracteres.");
    } else if (senha.value !== confirma.value) {
        alert("Senhas não coincidem.")
    } else {
        alert("Senha alterada.")
    }

}
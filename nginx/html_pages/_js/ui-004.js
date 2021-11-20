_$ = function(obj) {
	return document.getElementById(obj);
}
window.onload = function() {
    _$("form-container").onsubmit = tratarCamposAvancado;
    _$("form-modal").onsubmit = tratarCamposModal;
}

tratarCamposAvancado = function(e) {
    e.preventDefault();
    var temErro = false;
    var camposErro = "";
    var campos = new Array("user", "password");


    for (x = 0; x < campos.length; x++) {
        if (_$(campos[x]).value == "") {
            camposErro = camposErro + campos[x] + ",";
            temErro = true;
        }
    }


    if (temErro) {
        camposErro = camposErro.substr(0, camposErro.length - 1);
        alert("O(s) campo(s) " + camposErro + " é(são) obrigatório(s)");
        return
    }
    
    if(!temErro){
        window.location.href = "/ui-013.html"
    }

}
tratarCamposModal = function() {
    var temErro = false;
    var camposErro = "";
    var campos = new Array("cod-autenticacao");

    for (x = 0; x < campos.length; x++) {
        if (_$(campos[x]).value == "") {
            camposErro = camposErro + campos[x] + ",";
            temErro = true;
        }
    }


    if (temErro) {
        camposErro = camposErro.substr(0, camposErro.length - 1);
        alert("O código de autenticação é obrigatório");
    }

    return !temErro;

}

// BOTAO TOGGLE ATIVAR DESATIVAR USUARIO
const btnToggle = document.querySelector('.toggle-btn')
const toggleName = document.querySelector('.toggle-name')

btnToggle.onclick = event => {

    btnToggle.classList.toggle('active-toggle')

    if (btnToggle.classList == 'toggle-btn') {

        toggleName.textContent = 'Ativado'

    } else {

        toggleName.textContent = 'Desativado'

    }
}
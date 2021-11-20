_$ = function(obj) {
	return document.getElementById(obj);
}
window.onload = function() {
    _$("form-cad").onsubmit = tratarCamposAvancado;
}

tratarCamposAvancado = function(e) {
    e.preventDefault();
    var temErro = false;
    var camposErro = "";
    var campos = new Array("nome", "cpf", "nascimento", "endereco", "tel", "email", "password", "password-confirm");

    for (x = 0; x < campos.length; x++) {
        if (_$(campos[x]).value == "") {
            camposErro = camposErro + campos[x] + ",";
            temErro = true;
        }
    }


    if (temErro) {
        camposErro = camposErro.substr(0, camposErro.length - 1);
        alert("Os campos não preenchidos são obrigatórios");
        return
    }

    if(!temErro){
        window.location.href = "/ui-006.html"
    }

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
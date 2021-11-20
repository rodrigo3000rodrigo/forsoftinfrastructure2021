//  VALIDAR
_$ = function(obj) {
	return document.getElementById(obj);
}

window.onload = function() {
    _$("formulario").onsubmit = tratarCamposAvancado;
}

tratarCamposAvancado = function(e) {
    e.preventDefault(e);
    var temErro = false;
    var camposErro = "";
    var campos = new Array("email");

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
        window.location.href = "/ui-009.html"
    }

}
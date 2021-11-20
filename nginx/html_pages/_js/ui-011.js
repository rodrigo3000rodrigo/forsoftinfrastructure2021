_$ = function (obj) {
    return document.getElementById(obj);
};

window.onload = function () {
    _$("form1").onsubmit = tratarCamposAvancado;
};

tratarCamposAvancado = function (e) {
    e.preventDefault();
    var temErro = false;
    var camposErro = "";
    var campos = new Array("numero");

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
        window.location.href = "/ui-004.html"
    }
};
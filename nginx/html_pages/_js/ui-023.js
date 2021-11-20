window.onload = function() {
	document.getElementById("form1").onsubmit = validarCampos;
}

validarCampos= function () {
    var temErro = false;
    
    if(document.getElementById("cod-civa").value=="") {
        temErro = true;
    }

    if(document.getElementById("passw-login").value=="") {
        temErro = true;
    }

    if (temErro) {
        alert('Os campos Número CIVA, e Senha devem ser preenchidos!!');
    }

    return !temErro;
}


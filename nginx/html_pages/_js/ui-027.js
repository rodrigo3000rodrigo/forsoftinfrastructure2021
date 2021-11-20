window.onload = function(){
	document.getElementById("form1").onsubmit = tratarCampos;
	document.getElementById('btn-return').onclick = retrnPage;
}

tratarCampos = function() {
	var temErro = false;
	
	if (document.getElementById('passw1').value=="") {
		temErro = true;
	}
    if (document.getElementById('passw2').value=="") {
        temErro = true;
    }
    if (temErro) {
        alert('Todos os campos devem ser preenchidos!!');
    }
    if(document.getElementById('passw1').value != document.getElementById('passw2').value) {
        temErro = true;
        alert('As senhas digitadas devem ser iguais!');
    }

    if (temErro == false) {
        alert('Senha alterada com sucesso!');
    }

	return !temErro;
}






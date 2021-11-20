window.onload = function(){
	document.getElementById("form1").onsubmit = tratarCampos;
	document.getElementById('btn-return').onclick = retrnPage;
}

tratarCampos = function() {
	var temErro = false;
	
	if (document.getElementById('cod-rec-civa').value=="") {
		temErro = true;
		alert('O campo Código deve ser preenchido!');
	}

	return !temErro;
}

function retrnPage() {
	location.href = 'ui-025.html';
}






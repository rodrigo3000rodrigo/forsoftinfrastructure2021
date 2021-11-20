window.onload = function(){
	document.getElementById("form1").onsubmit = tratarCampos;
	document.getElementById('btn-return').onclick = retrnPage;
}

tratarCampos = function() {
	var temErro = false;
	
	if (document.getElementById('mail1').value=="") {
		temErro = true;
		alert('O campo Email deve ser preenchido!');
	}

	return !temErro;
}

function retrnPage() {
	location.href = 'ui-023.html';
}






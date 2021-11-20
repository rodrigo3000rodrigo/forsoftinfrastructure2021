window.onload = function() {
	document.getElementById('form1').onsubmit = tratarCampos;
}

function tratarCampos() {
	let temErro = false;
	let campos = ['dose','vac-name','lab-name','data-de-aplicacao','country','id-ponto-de-vacinacao','ponto-de-vacinacao','num-civa-profissional','lote'];

	for (x=0;x<campos.length;x++) {
		if (document.getElementById(campos[x]).value=='') {
			temErro = true;
		}
	}

	if (temErro) {
		alert('Todos os campos devem ser preenchidos!!');
	}
	else {
		alert('Alterações armazenadas!');
	}

	console.log(campos);
	return !temErro;
}

// ['id-de-vacinacao','dose','vac-name','lab-name','data-de-aplicacao','country','id-ponto-de-vacinacao','ponto-de-vacinacao','num-civa-profissional','lote'];




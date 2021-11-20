window.onload = function() {
	document.getElementById("form1").onsubmit = validarCampos;
    document.getElementById('btn-return').onclick = retrnPage;
}

validarCampos= function () {
    var temErro = false;
    
    if(document.getElementById("mail").value=="") {
        temErro = true;
        alert("O campo email é obrigatório!");
    }

    return !temErro;
}

function retrnPage() {
    location.href = 'ui-023.html';
}
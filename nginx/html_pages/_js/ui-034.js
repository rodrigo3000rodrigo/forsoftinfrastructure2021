window.onload = function() {
    document.getElementById("rtrn-btn-034").onclick = retrn;
    document.getElementById("form1").onsubmit = tratarCampos;
}

retrn = function () {
    let result = confirm("Deseja mesmo voltar? Os dados preenchidos serão perdidos!");

    if (result==true) {
        location.href = 'ui-028.html';
    }
}

tratarCampos = function () {
    let temErro = false;
    let campos = ['name', 'surname', 'civa', 'birthdate', 'country'];

    for (x=0;x<campos.length;x++){
        if (document.getElementById(campos[x]).value=='') {
            temErro = true;
        }
    }

    if (temErro) {
        alert('Todos os campos devem ser preenchidos!')
    }
    else {
        alert('Cadstro concluído com sucesso!');
    }

    return !temErro;
}

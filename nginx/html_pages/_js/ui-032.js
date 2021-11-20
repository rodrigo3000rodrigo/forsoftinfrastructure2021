window.onload = function() {
    document.getElementById('form-register-dose').onsubmit = tratarCampos;
    document.getElementById('btn-return').onclick = retrnPage;
}

function tratarCampos() {
    let temErro = false;
    let campos = ['batch','application-date'];

    for (x=0;x<campos.length;x++) {
        if (document.getElementById(campos[x]).value=='') {
            temErro = true;
        }
    }
    if (temErro) {
        alert('Os campos Lote e Data de aplicação devem ser preenchidos!');
    }
    else {
        alert('Cadastro realizado com sucesso!');
    }

    return !temErro;
}

function retrnPage() {
    let result = confirm('Deseja mesmo sair? Os dados inseridos serão perdidos!');

    if (result==true) {
        location.href = 'ui-029.html';
    }
}
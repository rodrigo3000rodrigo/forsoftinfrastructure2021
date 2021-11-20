window.onload = function(){
    document.getElementById("salvar").onclick = tratarCampos
    document.getElementById('btn-return').onclick = retrnPage;
}
  
function tratarCampos() {
    let temErro = false;
    let campos = ['senha', 'senha-conf'];

    for (x=0;x<campos.length;x++) {
        if (document.getElementById(campos[x]).value == '') {
            temErro = true;
        }
    }
    if (temErro) {
        alert('Todos os campos devem ser preenchidos!!');
    }
    if (document.getElementById('senha').value != document.getElementById('senha-conf').value) {
        temErro = true;
        alert('As senhas digitadas devem ser iguais!');
    }
    if (temErro == false) {
        alert('Senha alterada com sucesso!');
    }

    return !temErro;
}

function retrnPage() {
    location.href = 'ui-029.html';
}
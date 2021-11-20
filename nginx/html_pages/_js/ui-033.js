window.onload = function() {
    document.getElementById("form-register-portadorciva").onsubmit = tratar_campos;
    document.getElementById('btn-return').onclick = retrnPage;

}

tratar_campos = function() {
    let erro = false;
    let campos = ["select-document", "name", "surname", "identity", "date-birth", "country", "sub-div1","sub-div2","logrd","logrd-name", "ddi-telf","telf", "email", "password1", "password2"];


    for (i = 0; i < campos.length; i++) {
        if (document.getElementById(campos[i]).value=='') {
            erro = true;
        }
    }
    if (erro) {
       alert("Todos os campos devem ser preenchidos!!");
    }else {
        alert("Cadastro realizado com sucesso!");
    }

    return !erro;
}

function retrnPage() {
    let result = confirm('Deseja mesmo sair? Os dados inseridos serão perdidos!');

    if (result==true) {
        location.href = 'ui-028.html';
    }
}
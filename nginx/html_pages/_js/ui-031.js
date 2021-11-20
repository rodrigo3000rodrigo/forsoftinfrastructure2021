window.onload = function() {
    document.getElementById("form-register-vaccine").onsubmit = tratar_campos;
    document.getElementById('btn-return').onclick = retrnPage;

}

tratar_campos = function() {
    let erro = false;
    let campos = ["laboratory", "vaccine", "dose-number", "application-date", "batch"];


    for (i = 0; i < campos.length; i++) {

        if (document.getElementById(campos[i]).value=="") {
            erro = true;
        }
         
    }
    if (erro) {
       alert("Todos os campos devem ser preenchidos!");
    }else {
        alert("Cadastro realizado com sucesso!");
    }

    return !erro;
}

function retrnPage() {
    let result = confirm('Deseja mesmo sair? Os dados inseridos serão perdidos!');

    if (result==true) {
        location.href = 'ui-029.html';
    }
}
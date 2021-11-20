 // BOTAO TOGGLE ATIVAR DESATIVAR USUARIO
 const btnToggle = document.querySelector('.toggle-btn')
 const toggleName = document.querySelector('.toggle-name')

 btnToggle.onclick = event => {


 btnToggle.classList.toggle('active-toggle')

 if(btnToggle.classList == 'toggle-btn'){

     toggleName.textContent = 'Ativado' 

 }  else { 

 toggleName.textContent = 'Desativado'

}
}

window.onload = function(){
    document.getElementById("excluir").onclick = exclusao
    document.getElementById("form1").onsubmit = salvar
    document.getElementById("redefinir").onclick = redefinir
    document.getElementById('nova-vac').onclick = novaVacPage;
    document.getElementById('add-dose').onclick = addDosePage;
    document.getElementById('btn-return').onclick = retrnPage;
}
  
exclusao= function(){
    var result = confirm("Pense bem, a eliminação dos dados é irreversível!")

    if (result == true) {
    alert("Exclusão realizada com sucesso!");
    }
    else {
        alert('Exclusão cancelada!');
    }
}
salvar= function() {
    let temErro = false
    const campos = ['name','surname','cod-civa','id-num','data-nasc','country','sub-div1','sub-div2','logrd-name','ddi-tel','telf','mail'];

    for (x=0;x<campos.length;x++) {
        if (document.getElementById(campos[x]).value=='') {
            temErro = true;
        }
    }

    if (temErro) {
        alert('Todos os campos devem ser preenchidos!');
    }
    else {
        alert("Dados alterados com sucesso!");
    }
    
    return !temErro;
}

redefinir= function() {
    location.href = 'ui-128.html';
}

function novaVacPage() {
    location.href = 'ui-031.html';
}

function addDosePage() {
    location.href = 'ui-032.html';
}

function retrnPage() {
    let result = confirm('Deseja mesmo sair? As alterações serão perdidas!');

    if (result==true) {
        location.href = 'ui-028.html';
    }
}
window.onload = function() {
    document.getElementById('form1').onsubmit = tratarCampos;
    document.getElementById('excluir').onclick = excluirDados;
    document.getElementById('btn-return').onclick = retrnPage;
}

function tratarCampos() {
    let temErro = false;
    let campos  = ['vac-dose','vac-name','lab-name','data-apply','country','unid-id','unid-name','cod-civa-prof','vac-lote'];

    for (x=0;x<campos.length;x++) {
        if (document.getElementById(campos[x]).value=='') {
            temErro = true;
        }
    }

    if (temErro) {
        alert('Todos os campos devem ser preenchidos!');
    }
    else {
        alert('Alterações salvas com sucesso!');
    }

    return !temErro;
}

function excluirDados() {
    let result = confirm('Deseja mesmo excluir os dados cadastrados?');

    if (result==true) {
        alert('Dados excluídos com sucesso!');
    }
}

function retrnPage() {
    let result2 = confirm('Deseja mesmo sair? As alterações serão perdidas!');

    if (result2==true) {
        location.href = 'ui-028.html';
    }
}

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

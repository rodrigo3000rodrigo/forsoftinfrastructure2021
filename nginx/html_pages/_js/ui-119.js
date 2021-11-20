window.onload = function() {
    document.getElementById("salvar").onclick = checarFormulario;
    document.getElementById("botaoExcluir").onclick = confirmaExcluir;
}

confirmaExcluir = function() {
    var confirmar = window.confirm("Você deseja realmente apagar os dados?");
    if (confirmar) {
        alert("Dados excluidos com sucesso!");
    } else {
        alert("Exclusão cancelada!");
    }

}

function checarFormulario() {
    var entradas = document.getElementsByClassName("input-default");
    var ok = true;

    for (var i = 0; i < entradas.length; i++) {
        if (!entradas[i].value) {
            ok = false;
        }
    }
    if (ok) {
        alert("Você preencheu todos os campos!!")

    } else {
        alert("Você não preencheu todos os campos!!")

    }

};




// BOTAO TOGGLE ATIVAR DESATIVAR USUARIO
const btnToggle = document.querySelector('.toggle-btn')
const toggleName = document.querySelector('.toggle-name')

btnToggle.onclick = event => {


    btnToggle.classList.toggle('active-toggle')

    if (btnToggle.classList == 'toggle-btn') {

        toggleName.textContent = 'Ativado'

    } else {

        toggleName.textContent = 'Desativado'

    }
}
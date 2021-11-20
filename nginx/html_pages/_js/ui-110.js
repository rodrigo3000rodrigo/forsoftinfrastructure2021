window.onload = function() {
    document.getElementById("button-adjust").onclick = tratarCamposAvancado;
}

tratarCamposAvancado = function() {
    var senha = document.getElementById("senha");
    var confirmasenha = document.getElementById("confirma-senha");
    var entradas = document.getElementsByClassName("input-default");
    var ok = true;

    for (var i = 0; i < entradas.length; i++) {
        if (!entradas[i].value) {
            ok = false;
        }
    }
    if (ok) {
        alert("Cadastro realizado com Sucesso!!");

    } else {
        alert("Você não preencheu todos os campos!!");

    }
}


// // BOTAO TOGGLE ATIVAR DESATIVAR USUARIO
// const btnToggle = document.querySelector('.toggle-btn')
// const toggleName = document.querySelector('.toggle-name')

// btnToggle.onclick = event => {


// btnToggle.classList.toggle('active-toggle')

// if(btnToggle.classList == 'toggle-btn'){

//     toggleName.textContent = 'Ativado' 

// }  else { 

// toggleName.textContent = 'Desativado'

// }
// }
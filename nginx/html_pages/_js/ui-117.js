window.onload = function() {
    document.getElementById("voltar") .onclick = mensagem;
    document.getElementById("form1") .onsubmit = campos;
}

mensagem = function () {
    alert("Os dados preenchidos não serão salvos!"); //voltar//
}

campos = function () {
    var correto = true;

    if (document.getElementById("pais").value==""){
        alert("Campo país está vazio"); //país//
        correto = false;
    }

    if (document.getElementById("sub1").value==""){
        alert("Campo subdivisão 1 está vazio"); //sub1//
        correto = false;
    }

    if (document.getElementById("sub2").value==""){
        alert("Campo subdivisão 2 está vazio"); //sub2//
        correto = false;
    }

    if (document.getElementById("sub3").value==""){
        alert("Campo subdivisão 3 está vazio"); //sub3//
        correto = false;
    }

    if (document.getElementById("sub4").value==""){
        alert("Campo subdivisão 4 está vazio"); //sub4//
        correto = false;
    }

    if (document.getElementById("sub5").value==""){
        alert("Campo subdivisão 5 está vazio"); //sub5//
        correto = false;
    }
    
    if (document.getElementById("sub").value==""){
        alert("Campo Subdivisão está vazio"); //gersub//
        correto = false;
    }

    return correto;
}

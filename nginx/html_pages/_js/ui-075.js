window.onload = function() {
          document.getElementById("voltar") .onclick = mensagem;
          document.getElementById("form-cadastrargestor") .onsubmit = campos;
      }
      
      mensagem = function() {
          alert("Os dados preenchidos não serão salvos!");
      }
      
      campos = function() {
        
        
        var correto = true;
    
        if (document.getElementById("input-Nome").value==""){
            alert("Campo Nome vazio");
            correto = false;
            return correto;
        }
        if (document.getElementById("input-Sobrenome").value==""){
            alert("Campo Sobrenome vazio");
            correto = false;
            return correto;
        }
        if (document.getElementById("input-Identidade").value==""){
            alert("Campo Identidade vazio");
            correto = false;
            return correto;
        }
        if (document.getElementById("input-Datadenascimento").value==""){
            alert("Campo Data de nascimento vazio");
            correto = false;
            return correto;
        }
        if (document.getElementById("select-Paísdeorigem").value==""){
            alert("Selecione um país");
            correto = false;
            return correto;
        }
        if (document.getElementById("select-Estado").value==""){
            alert("Selecione um Estado");
            correto = false;
            return correto;
        }
        if (document.getElementById("select-Cidade").value==""){
            alert("Selecione uma Cidade");
            correto = false;
            return correto;
        }
        if (document.getElementById("select-Logradouro").value==""){
            alert("Selecione um Logradouro");
            correto = false;
            return correto;
        }
        if (document.getElementById("input-Logradouro").value==""){
            alert("Campo Logradouro vazio");
            correto = false;
            return correto;
        }
        if (document.getElementById("input-Contato").value==""){
            alert("Campo Contato vazio");
            correto = false;
            return correto;
        }
        if (document.getElementById("input2-Contato").value==""){
            alert("Campo Contato vazio");
            correto = false;
            return correto;
        }
        if (document.getElementById("input-Email").value==""){
            alert("Campo Email vazio");
            correto = false;
            return correto;
        }
        return correto;
}
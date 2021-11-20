window.onload = function() {
    document.getElementById("voltar").onclick = mensagem ;
    document.getElementById("form1").onsubmit = campos ;

}

mensagem = function(){
    alert("Dados preenchidos não serão salvos")
    
    
    }

campos = function(){
var correto = true;

if (document.getElementById("password").value ==""){
    alert("Campo senha está vazio");
    correto = false;
}

if (document.getElementById("password2").value ==""){
    alert("Campo confirme a senha está vazio");
    correto = false;

}

return correto;

}
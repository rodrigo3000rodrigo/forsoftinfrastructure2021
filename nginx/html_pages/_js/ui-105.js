// Menu lateral navegação
list = document.querySelectorAll('.item-menu')

for (let i = 0; i < list.length; i++){
    list[i].onclick = function(){
         let j = 0;
         while(j < list.length){
             list[j++].className='item-menu'
         }
         list[i].className='item-menu active-item-menu'
    }
}

// Verificação de senhha

conferir_id = function(obj){
    return document.getElementById(obj);
}

window.onload = function(){
    conferir_id("modalopen2").onclick = tratarCampos;
}  
    conferir_id("")


tratarCampos = function(){
    
    var correto = true;

    if (conferir_id("senha").value!=conferir_id("confirmar").value ){
        alert("Senhas diferentes, não é possível prosseguir")
        correto = false;
    }

    if ((conferir_id("senha").value.length||conferir_id("confirmar").value.length) <7){
        alert("Senha deve possuir mais de 6 caracteres")
        correto = false;
    }

    if(correto){
        alert("Senha alterada com sucesso!")
    }

    return correto;
    
}




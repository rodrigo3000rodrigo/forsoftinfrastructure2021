

window.onload = function() {
    document.getElementById("alterar-senha").onsubmit = tratar_campos;

}
tratar_campos = function() {
    let erro = false;
    var msg = "";
    let campos = new Array("senha", "repetir-senha");


    for (i = 0; i < campos.length; i++) {

        if (document.getElementById(campos[i]).value=="") {  
            msg = "" + msg + campos[i] + ", ";
            erro = true;
        }
         
    }
    if (erro) {
       msg = msg.substr(0, msg.length-2);
       alert("o(s) campo(s) "+ msg +" é (são) obrigatório(s)");
    }else {
        alert("Senha alterada com sucesso!");
    }

    return !erro;
}
//Seleção do menu
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
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


//Alerta
window.onload = function(){
    document.getElementById("desvincular").onclick = tratarCampo
}
  
tratarCampo= function(){
    alert("Desvinculado com sucesso!")
}

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
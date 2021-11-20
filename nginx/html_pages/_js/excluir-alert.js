const btnDetele = document.querySelector('#delete-user')

btnDetele.addEventListener('click', deleteUser)

function deleteUser(){
   let confirmDeleteUser = confirm('Pense Bem! A eliminação dos dados é irreversível.')
   if(confirmDeleteUser == true){
       window.alert('Exclusão realizada com sucesso!')
   }
}
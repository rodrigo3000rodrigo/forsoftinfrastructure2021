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

function validar(){
    var name = form.name.value;
    var mail = form.mail.value;
    var civa = form.civa.value;
    var date = form.date.value;
    var ident = form.ident.value;
    var pais = form.pais.value;
    var crm = form.crm.value;
    var contact = form.contact.value;


    if(name == ""){
        alert("Campo nome obrigatório!");
        name.focus();
        return false;
    }
    if(cod-civa == ""){
        alert("Campo civa obrigatório!");
        civa.focus();
        return false;
    }
    if(date == ""){
        alert("Campo date obrigatório!");
        date.focus();
        return false;
    }
    if(ident == ""){
        alert("Campo identidade obrigatório!");
        ident.focus();
        return false;
    }
    if(pais == ""){
        alert("Campo endereço obrigatório!");
        pais.focus();
        return false;
    }
    if(crm == ""){
        alert("Campo País de origem obrigatório!");
        crm.focus();
        return false;
    }
    if(mail == ""){
        alert("Campo email obrigatório!");
        mail.focus();
        return false;
    }
    if(contact == ""){
        alert("Campo contato obrigatório!");
        contact.focus();
        return false;
    }
}

// RETORNA ELEMENTO EM OBJETO
function getElement(element){
    return document.getElementById(element)
}
// EVENTO SUBMIT FORMULARIO
getElement(nameForm).addEventListener('submit', checkForm)


function checkForm(event){

   for(let num = 0; num < elementsForm.length ; num++){

    if(getElement(elementsForm[num]).value == ''){

            window.alert(`O campo ${getElement(elementsForm[num]).name} está vazio`)

    } else if((elementsForm.length-1) == num){
            window.alert(`Formulario enviado com sucesso`)
            break;
            
        }
    }
       event.preventDefault()
}

// INPUTS
const elementsForm = ['name-complet','number-civa','identity','date-birth','email','contact','adress','country']
// ID DO FORMULARIO
const nameForm = 'form-panel-supervisor'
// INPUTS
const elementsForm = ['#name','#last-name','#identify','#date-birth','#IDunity','#crm','#country','#subdivision-1','#subdivision-2','#address','#street','#contact-ddi','#contact-cel','#email']
// ID DO FORMULARIO
const nameForm = '#form-register-profissionalsaude'


// RETORNA ELEMENTO EM OBJETO
function getElement(element){
    return document.querySelector(element)
}
// EVENTO SUBMIT FORMULARIO
getElement(nameForm).addEventListener('submit', checkForm)


function checkForm(event){

let formComplet = true 

// se o formulario estiver vazio
for(let num = 0; num < elementsForm.length ; num++){

    if(getElement(elementsForm[num]).value == ''){

        formComplet = false
        getElement(elementsForm[num]).parentElement.setAttribute('data-error','Campo obrigatório!')

    } else {

        getElement(elementsForm[num]).parentElement.removeAttribute('data-error')
    
    }
}

// Caso esteja todo preenchido
if(formComplet == true){
window.alert('Formulario enviado!')
} 

       event.preventDefault()
}
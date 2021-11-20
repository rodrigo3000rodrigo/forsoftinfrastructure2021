
let form = document.querySelector('#inputValidation')
let name1 = document.querySelector('#name1')
let zipCode = document.querySelector('#zipCode')
let subdivision1 = document.querySelector('#subdivision1')
let subdivision2 = document.querySelector('#subdivision2')
let logradourotipo = document.querySelector('#logradourotipo')
let logradouronome = document.querySelector('#logradouronome')
let contatoddi = document.querySelector('#contatoddi')
let contatonumero = document.querySelector('#contatonumero')
let location1 = document.querySelector('#location1')
let nature = document.querySelector('#nature')
let establishment = document.querySelector('#establishment')

let fields = [];

form.addEventListener('submit', function (event) {

    event.preventDefault()

    fields.push(name1.value, zipCode.value, subdivision1.value, subdivision2.value,
    logradourotipo.value, logradouronome.value, contatoddi.value, contatonumero.value, location1.value, nature.value, establishment.value);
     console.log(fields)
    if (fields.includes("") || fields.includes(null) || fields.includes(undefined)) {
        alert("Por gentileza, preencha todos os campos.")
    } else {
        alert("Dados enviados com sucesso.")
    }
})


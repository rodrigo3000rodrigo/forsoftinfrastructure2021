const html = (id) => {
    return document.getElementById(id);
}

const form = html('formulario');
const formY = ['nome', 'endereço', 'email', 'CIVA', 'nascimento', 'contato'];


const validar = () => {

    let valid = true;
    let camposErro = "";
    for (let i = 0; i < formY.length; i++) {
        if (html(formY[i]).value == "") {
            
            camposErro = camposErro + formY[i] + ", ";
            valid = false;
        }
    }
    if (!valid) {
        camposErro = camposErro.substr(0, camposErro.length - 1);
        alert(`O(s) campo(s) ${camposErro} é(são) obrigatório(s)`);
    }
    return valid;
}

form.onsubmit = validar;
const form = document.getElementById("formulario");
const codigo = document.getElementById("codigo");

const validar = (e) => {
  e.preventDefault();
  const valid = true;

  if (codigo.value == "") {
    alert("O campo está vazio!");
    valid = false;
  }

  if(valid){
      window.location.href = "./ui-010.html"
  }
};

form.addEventListener("submit", validar);

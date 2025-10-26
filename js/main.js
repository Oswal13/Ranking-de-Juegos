const formulario = document.querySelector(".formulario");
const nombre = document.querySelector("#nombre");
const apellido = document.querySelector("#apellido");
const whatsapp = document.querySelector("#whatsapp");
const correo = document.querySelector("#correo");
const mensaje = document.querySelector("#mensaje");
const boton = document.querySelector("#boton");

function enviarPantalla(event) {
    event.preventDefault();

    console.log("Nombre: " + nombre.value);
    console.log("Apellido: " + apellido.value);
    console.log("Whatsapp: " + whatsapp.value);
    console.log("Correo: " + correo.value);
    console.log("Mensaje: " + mensaje.value);

    event.target.reset();
}

formulario.addEventListener("submit", enviarPantalla);


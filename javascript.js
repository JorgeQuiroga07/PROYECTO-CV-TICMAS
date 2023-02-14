const button = document.querySelector('.saludo');

button.addEventListener("click", saludar);

function saludar(){
    alert("Bienvenida a mi web! Disfruta el recorrido ☺️");
    /*button.removeEventListener("click", saludar);*/
} 

const btnAbrirModal =
document.querySelector("#btn-abrir-modal");
const btnCerrarModal =
document.querySelector("#btn-cerrar-modal");
const modal =
document.querySelector("#modal");

btnAbrirModal.addEventListener("click",()=>{
    modal.showModal();
    })
btnCerrarModal.addEventListener("click",()=>{
    modal.close();
})

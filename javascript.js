const button = document.querySelector('.saludo');

button.addEventListener("click", saludar);

function saludar(){
    alert("Bienvenida a mi web! Disfruta el recorrido ☺️");
    button.removeEventListener("click", saludar);
} 

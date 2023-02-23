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


const btn_scrolltop = document.getElementById("btn_scrolltop")
btn_scrolltop.addEventListener("click", () => {
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
})

window.onscroll = () => {
    add_btn_scrolltop()
}

const add_btn_scrolltop = () => {
    if (window.scrollY < 3600) {
        btn_scrolltop.classList.remove("btn-scrolltop-on")
    } else {
        btn_scrolltop.classList.add("btn-scrolltop-on")   
    }
}

const bdark = document.querySelector('#bdark');
const body = document.querySelector('body');

load();

bdark.addEventListener('click', e =>{
    body.classList.toggle('darkmode');
    store(body.classList.contains('darkmode'))
});

function load(){
 const darkmode = localStorage.getItem('darkmode');

 if(!darkmode){
    store('true');
}else if(darkmode == 'false'){
    body.classList.add('darkmode');
}
}

function store(value){
    localStorage.setItem('darkmode', value);
}
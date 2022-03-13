let miBoton = document.getElementById("elBoton");
let miParrafo = document.getElementById("elParrafo");

miBoton.addEventListener(
    'click', 
    () =>{
        miParrafo.classList.toggle("parrafo-azul");
    }
);


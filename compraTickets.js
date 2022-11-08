const ticket = 200;
const estudiante = 0.80;
const trainee = 0.50;
const junior = 0.15;

const cantidad = document.getElementById('cantidad');
const categoria = document.getElementById('categoria');
const mostrar = document.getElementById('total');
const calcular = document.getElementById('botonResumen');

const borrar = document.getElementById('botonBorrar');

function CompraDeTicket(){
    let valorTicket = cantidad.value * ticket;
    if(categoria.value == 1){
        valorTicket = valorTicket - (valorTicket * estudiante);
    }
    else if(categoria.value == 2){
        valorTicket = valorTicket - (valorTicket * trainee);
    }
    else if(categoria.value == 3){
        valorTicket = valorTicket - (valorTicket * junior);
    }else{
        valorTicket;
    }
    mostrar.innerHTML = `Total a pagar: $ ${valorTicket}`;
}

calcular.addEventListener('click',CompraDeTicket);


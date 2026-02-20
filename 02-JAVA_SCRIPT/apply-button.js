const jobListingSection = document.querySelector(".job-listings")

jobListingSection?.addEventListener('click', function(event)
{
    const element = event.target;

    if(element.classList.contains('button-apply-job'))
    {
        element.textContent = '¡Aplicado!';
        element.classList.add('is-applied')
        window.location.href = './ofertas.html'
    }
})



// comentarios con otros eventos importantes

//query selector solo retorna el primer botón que encuentra
// const boton = document.querySelector(".buttton-apply-job");

// Este bloque funciona pero no es la forma más correcta, la más correcta es abajo
// const botones = document.querySelectorAll(".button-apply-job");
// botones.forEach(boton =>{

//     boton.addEventListener("click", function() {
//         boton.textContent = '¡Aplicado!';
//         boton.classList.add('is-applied')
        
//     });
// })


//consiste en buscar el elemento padre y dentro de ese elemento, buscar el elemento
// a quien se hizo click y si es botón añadir el evento, no añadirlo para todos los botones a la vez.

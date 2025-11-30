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

const filterLocation = document.querySelector('#filter-location')
const jobs =document.querySelectorAll('.job-listing-cards')

filterLocation.addEventListener('change',function(){
    const selectedValue = filterLocation.value
    jobs.forEach(job => {
        // const modalidad = job.dataset.modalidad
        const modalidad = job.getAttribute('data-modalidad')
        const isShown = selectedValue === '' || selectedValue === modalidad
        job.classList.toggle('is-hidden',!isShown)

        //#region forma antigua antes del toggle
        // if(selectedValue === '' || selectedValue===modalidad){
        //     job.classList.remove('is-hidden')
        // }
        // else{
        //     job.classList.add('is-hidden')
        // }
        //#endregion
    
    })
})

//#region EVENTOS ÚTILES
// const searchInput = document.querySelector('#empleos-search-input')
// searchInput.addEventListener('input',function(){
//     console.log(searchInput.value)
// })

// searchInput.addEventListener('blur', function(){
//     console.log('Este evento se dispara cuando se pierde el foco del control')
// })

// const searchForm = document.querySelector('#empleos-search-form')
// searchForm.addEventListener('submit', function(){
//     //viaja la info a la url si no se previene el evento por defecto.
//     event.preventDefault()
//     console.log('submit')
// })

// document.addEventListener('keydown', function(event){
//     console.log('tecla presionada',event.key)
//     console.log('¿Está pulsada la tecla shift?',event.shiftKey)
//     console.log('¿Está pulsada la tecla ctrl?',event.ctrlKey)
    
    
// })
//#endregion

// -------------------------------- FETCH ---------------------//

fetch("/02-JAVA_SCRIPT/data.json")
.then((response) =>{
    return response.json();
})
.then((jobs)=>{
    console.log('tengo los resultados del fetch')
    console.log(jobs)
})
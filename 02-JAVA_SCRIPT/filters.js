const filterLocation = document.querySelector('#filter-location')

filterLocation.addEventListener('change',function(){
    
    const jobs =document.querySelectorAll('.job-listing-cards')
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

const filterTechnology = document.querySelector('#filter-technology')
filterTechnology.addEventListener('change',function(){
    
    const jobs =document.querySelectorAll('.job-listing-cards')
    const selectedValue = filterTechnology.value.toLowerCase()
    jobs.forEach(job => {
        // const modalidad = job.dataset.modalidad
        const techString = job.getAttribute('data-tecnologia')
        const tecnologias = techString.split(",");
        console.log(selectedValue)
        const isShown = selectedValue === '' || tecnologias.includes(selectedValue)
        job.classList.toggle('is-hidden',!isShown)
    
    })
})



const filterExperience = document.querySelector('#filter-experience-level')
filterExperience.addEventListener('change',function(){
    
    const jobs =document.querySelectorAll('.job-listing-cards')
    const selectedValue = filterExperience.value
    jobs.forEach(job => {
        // const modalidad = job.dataset.modalidad
        const experiencia = job.getAttribute('data-experiencia')
        const isShown = selectedValue === '' || selectedValue === experiencia
        job.classList.toggle('is-hidden',!isShown)
    
    })
})
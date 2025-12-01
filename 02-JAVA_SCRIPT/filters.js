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
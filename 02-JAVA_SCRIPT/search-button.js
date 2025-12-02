const searchFilter = document.querySelector('#empleos-search-input')

searchFilter.addEventListener('input', function(event){
    const jobs = document.querySelectorAll('.job-listing-cards')
    const search = event.target.value

    jobs.forEach(job => {
        
        const titulo = job.querySelector('h3').textContent
        
        const isShown = search === '' || titulo.toLowerCase().includes(search.toLowerCase())
        job.classList.toggle('is-hidden',!isShown)
    });
        
})
const paginationContainer = document.querySelector('.pagination')
const jobs = document.querySelectorAll('.job-listing-cards')

MakePagination(currentPage)
{

    const RESULTS_PER_PAGE = 3
    const totalPages = Math.ceil(jobs.length/RESULTS_PER_PAGE)
    paginationContainer.innerHTML = ''
    
    for (let i = 1; i<= totalPages; i++){
        const button = document.createElement('button')
        button.textContent = i
        button.className = 'page-button'
        
        if(i===currentPage){
            button.classList.add('active')
        }
        
        paginationContainer.appendChild(button)
    }

    /////////INCOMPLETOOOOOOOOO//////////
    
}

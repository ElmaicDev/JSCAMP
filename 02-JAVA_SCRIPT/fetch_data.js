const container = document.querySelector('.job-listings')


fetch("/02-JAVA_SCRIPT/data copy.json")
.then((response) =>{
    return response.json();
})
.then((jobs)=>{
    jobs.forEach(job => {
        const article = document.createElement('article')
        article.className = 'job-listing-cards'
        article.dataset.modalidad =job.data.modalidad
        article.dataset.experiencia = job.data.nivel
        article.dataset.tecnologia = job.data.technology

        article.innerHTML = `<div>
                                <h3>${job.titulo}</h3>
                                <small>${job.empresa}</small>
                                <p>${job.descripcion}</p>
                            </div>
                            <button  class="button-apply-job">Aplicar</button>`

        container.appendChild(article)
    })
})
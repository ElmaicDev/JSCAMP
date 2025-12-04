import React from "react"

function JobCard({job}){

        const [
                isApplied,
                setIsApplied
            ] = React.useState(false) // Esto devuelve un array con dos posiciones

            const text = isApplied ? 'Aplicado!' : "Aplicar"
            const buttonClass = isApplied ? 'is-applied' : ''

            function handleClick(){
                setIsApplied(!isApplied)
            }


    return(

        <article 
            className="job-listing-cards"
            data-modalidad={job.data.modalidad}
            data-experiencia={job.data.nivel}
            data-technology = {job.data.technology}>
            <div>
                <h2>{job.titulo}</h2>
                <small>{job.empresa} | {job.data.modalidad}</small>
                <p>{job.descripcion}</p>
            </div>
            <button className={`button-apply-job ${buttonClass}`}
            onClick={handleClick}>{text}</button>


        </article>
    )

}

export default JobCard
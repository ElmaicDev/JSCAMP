import React from "react"

function JobCard({data,empresa,titulo,descripcion}){

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
            data-modalidad={data.modalidad}
            data-experiencia={data.nivel}
            data-technology = {data.technology}>
            <div>
                <h2>{titulo}</h2>
                <small>{empresa} | {data.modalidad}</small>
                <p>{descripcion}</p>
            </div>
            <button className={`button-apply-job ${buttonClass}`}
            onClick={handleClick}>{text}</button>


        </article>
    )

}

export default JobCard
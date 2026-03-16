import React from "react"
import { Link } from "./Link"
import styles from './JobCard.module.css'

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
                <h2>
                    <Link className={styles.title} href={`/jobs/${job.id}`}>
                        {job.titulo}
                    </Link>
                </h2>
                <small>{job.empresa} | {job.data.modalidad}</small>
                <p>{job.descripcion}</p>
            </div>

            <div className={styles.actions}>
                <Link className={styles.details} href={`/jobs/${job.id}`}>
                    Ver Detalles
                </Link>
                <button className={`button-apply-job ${buttonClass}`}
                onClick={handleClick}>{text}</button>
            </div>


        </article>
    )

}

export default JobCard
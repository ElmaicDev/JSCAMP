import React from "react"
import { Link } from "./Link"
import styles from './JobCard.module.css'
import { useFavoritesStore } from "../store/favoritesStore"
import { useAuthStore } from "../store/authStore"

function JobCardFavoriteButton({jobId}){

    const {isLoggedIn} = useAuthStore()
    // Se suscribe a toda la store, por eso se renderizan otros corazones de la store.
    const {toggleFavorite, isFavorite} = useFavoritesStore()

    return (
        <button disabled={!isLoggedIn} onClick={() => toggleFavorite(jobId)}>
                    {isFavorite(jobId) ? '❤️' : '🤍'}
        </button>
    )

}

function JobCardApplyButton({jobId}){

    const {isLoggedIn} = useAuthStore()
     const [
                isApplied,
                setIsApplied
            ] = React.useState(false) // Esto devuelve un array con dos posiciones
            

            const text = isApplied ? 'Aplicado!' : "Aplicar"
            const buttonClass = isApplied ? 'is-applied' : ''

            function handleClick(){
                console.log('Aplicando al trabajo', jobId)
                setIsApplied(!isApplied)
            }

    return (
        <button disabled={!isLoggedIn}  className={`button-apply-job ${buttonClass}`}
        onClick={handleClick}>{text}</button>
    )
}

function JobCard({job}){

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
                <JobCardApplyButton/>
                <JobCardFavoriteButton jobId={job.id}/>
            </div>


        </article>
    )

}

export default JobCard
import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router"  // Es para usar los parámetros de las url dinámicas. 
import { Modal } from "../components/Modal"
import snarkdown from  'snarkdown' // esta dependencia sirve para convertir de markDown a html
import styles from './Detail.module.css'
import { Link } from "../components/Link"

function JobSection({title,content}){

    const html = snarkdown(content)
    return(
        <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
                {title}
            </h2>
            {/* dangerouslySetInnerHTML se puede inyectar HTML, Pero debes saber a ciencia cierta de dónde viene porque sino, te hacen inyección de html. Esta es la forma fea pero hay bibliotecas */}
            <div className={`${styles.sectionContent} prose`} dangerouslySetInnerHTML={{__html: html}}>
            </div>
        </section>

        
    )
}

export function JobDetail(){
    const {JobId} = useParams() // el nombre de este parámetro es el que se le asigna a la ruta en Route.
    const [job, setJob] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const navigate = useNavigate()

    useEffect(()=>{
        fetch(`https://jscamp-api.vercel.app/api/jobs/${JobId}`)
        .then(res =>{
            if(!res.ok){
                throw new Error('Job Not Found')
            }
            return res.json()
        })
        .then(json => {
            setJob(json)
            console.log(json)
        })
        .catch(err => {
            setError(err.message)
        })
        .finally(() => {
            setLoading(false)
        })
    }, [JobId])

    if(loading){
        return <Modal>
            <p> Cargando...</p>
            <div className="loader"></div>
        </Modal>
    }

    if(error || !job){
        return <Modal>
            <p> Oferta No encontrada</p>
            <button onClick={() => navigate('/')}>Volver al inicio</button>
            
        </Modal>
    }

    return (
        <>
           <div style = {{maxWidth: '1280px', margin: '0 auto', padding: '0 1 rem'}}>
                <div className={styles.container}>
                    <nav className={styles.breadcrumb}>
                        <Link to='/search'
                        className={styles.breadcrumbButton}>
                            Empleos
                        </Link>
                        <span className={styles.breadcrumbSeparator}>/</span>
                        <span className={styles.breadcrumbCurrent}>{job.titulo}</span>
                    </nav>
                </div>

                <header className={styles.header}>
                    <h1 className={styles.title}>
                        {job.titulo}
                    </h1>
                    <p className={styles.meta}>
                        {job.empresa} ~ {job.ubicacion}
                    </p>
                </header>

                <button className={styles.applyButton}>
                    Aplicar Ahora
                </button>

                <JobSection title="Descripción del puesto" content={job.content.description}/>
                <JobSection title="Responsabilidades del puesto" content={job.content.responsibilities}/>
                <JobSection title="Requisitos del puesto" content={job.content.requirements}/>
                <JobSection title="Acerca de la empresa" content={job.content.about}/>
            </div>
        </>
    )

}
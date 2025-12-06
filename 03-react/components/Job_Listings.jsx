import JobCard from "../components/JobCard.jsx"

function Job_Listing({jobs}){

    return(
        //ESTA ETIQUETA VACÍA ES UN FRAGMENTO Y SE USA CUANDO SE DEBEN DEVOLVER DOS ELEMENTOS EN EL RETURN, EN ESTE CASO EL DIV Y EL H2
        <>
            <h2 style={{textAlign:'center'}}>Resultados de Búsqueda</h2>
            {/*<!-- Aquí irían los resultados de búsqueda -->*/}
        
            <div className="job-listings">
                {
                    jobs.map(job => (
                        // Esta key identifica al elemento para tenerlo con un marcador único, y poder buscarlo fácilmente, es un identificador único
                        <JobCard key={job.id} job = {job} />

                    ))
                    
                }
            </div>
        </>

            
    
        

    )
}

export default Job_Listing
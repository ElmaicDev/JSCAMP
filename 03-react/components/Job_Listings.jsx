import JobCard from "../components/JobCard.jsx"
function Job_Listing(){

    return(
        //ESTA ETIQUETA VACÍA ES UN FRAGMENTO Y SE USA CUANDO SE DEBEN DEVOLVER DOS ELEMENTOS EN EL RETURN, EN ESTE CASO EL DIV Y EL H2
        <>
            <h2>Resultados de Búsqueda</h2>
            {/*<!-- Aquí irían los resultados de búsqueda -->*/}
        
            <div className="job-listings">
                <JobCard 
                    titulo = "Desarrollador/a frontend react.js"
                    empresa = "Tech Solutions"
                    ubicacion = "Remoto"
                    descripcion = "blablablablablabalbalabalbalabalabalablabla"
                    data = {{modalidad:"remoto", nivel:"junior", technology:"react"}}
                />
            </div>
        </>

            
    
        

    )
}

export default Job_Listing
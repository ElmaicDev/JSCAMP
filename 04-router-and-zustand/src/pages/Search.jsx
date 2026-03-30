import { useEffect,useState } from "react"
import SearchFormSection from "../components/SearchFormSection.jsx"
import Job_Listing from "../components/Job_Listings.jsx" //se puede cambiar el nombre como {Job_Listing as Job}
import Pagination from "../components/Pagination.jsx"
import { Modal } from "../components/Modal.jsx";
import errorIcon from "../assets/icons/errorIcon.svg"
import { getErrorMessage } from "../helpers/Errors.jsx";
import { Navigate, useSearchParams } from "react-router";
import { BreadCrumb } from "../components/Breadcrumb"

const RESULT_PER_PAGE = 4;

const useFilter = () =>
    {

    const [searchParams, setSearchParams] = useSearchParams()

    const [filters,setFilters] = useState(() => {
        const saved = window.localStorage.getItem('jobsFilters')
        return saved ? JSON.parse(saved) : {
            technology: searchParams.get('technology') || '',
            location: searchParams.get('type') || '',
            experienceLevel: searchParams.get('level') || ''
        }
    })

    // Si se inicializa, con una arrow function, este componente solo se ejecuta una vez, sino, si se pone directamente searchParams, se renderiza siempre.
    const [textToFilter, setTextToFilter] = useState(() => searchParams.get('text') || '') // sin las llaves ni el return, lo que retorna la arrow function es la primer expresion.

    const [currentPage, setCurrentPage] = useState(() => {
        const page = Number(searchParams.get('page')) 
        return Number.isNaN(page) || page == 0? 1 : page
    })

   
    const [total,setTotal] = useState(0)
    const [jobs, setJobs] = useState([])
    const [loading, setLoading] = useState(true)
    const [hasActiveFilters, setHasActiveFilters] = useState(false)

    const [fetchErrors, setFetchErrors] = useState(null)
    const totalPages = Math.ceil(total / RESULT_PER_PAGE)


    const handleClearFilters = () =>{


        setFilters({
            technology:  '',
            location: '',
            experienceLevel:  ''
        })
       
        setTextToFilter('')
        window.localStorage.removeItem('jobsFilters')
        setHasActiveFilters(false);
        setCurrentPage(1)
    }

    
    //En react no se puede hacer una llamada asíncrona dentro de un componente o un custom hook, por eso, así toca hacer el fetch dentro del useEffect
    useEffect(() => {

        async function fecthJobs(){

            try{
                setLoading(true)
                //URLSearchParams es una interfaz que proporciona métodos para trabajar con los parámetros de consulta de una URL. Permite crear, manipular y acceder a los parámetros de consulta de manera sencilla.
                const params = new URLSearchParams()

                //Esto se está haciendo porque desde la api del midu se hacen los filtros por medio de la url, por medio de los filter params, por ejemplo los parámetros que van después de "?"
                if(textToFilter) params.append('text', textToFilter)
                if(filters.technology) params.append('technology', filters.technology)
                if(filters.location) params.append('type', filters.location)
                if(filters.experienceLevel) params.append('level', filters.experienceLevel)
                
                const offset = (currentPage - 1) * RESULT_PER_PAGE
                params.append('limit', RESULT_PER_PAGE) // la cantidad de resultados por página
                params.append('offset', offset) // que se salte cierta cantidad de resultados de la api para que muestre los resultados de la página actual, por ejemplo, si estamos en la página 2, se va a saltar los primeros 4 resultados y va a mostrar los siguientes 4 resultados, es decir, del 5 al 8.


                const queryParams = params.toString() //toString convierte los parámetros a una cadena de texto, por ejemplo "text=react&technology=frontend"

                const response = await fetch(`https://jscamp-api.vercel.app/api/jobs?${queryParams}`) //se le pasan los parámetros a la url, por ejemplo "https://jscamp-api.vercel.app/api/jobs?text=react&technology=frontend"
                if(response.ok){
                    const json = await response.json()
                    setJobs(json.data)
                    setTotal(json.total)
                }
                else{
                    throw new Error(response.status)
                }
            }
            catch(error){
                const mensaje = getErrorMessage(error);
                setFetchErrors(mensaje)


            }
            finally{
                setLoading(false)
            }
        }
        fecthJobs();
    }
    ,[filters,textToFilter,currentPage]) //con el arreglo vacío solo se renderiza el effect la primer vez

    useEffect(() => {

        setSearchParams((params) => {
            //acá antes de .set era un append, pero porque ya no necesita agregarlos sino setearlos
            if(textToFilter) params.set('text',textToFilter)
            else params.delete('text')
            if(filters.technology) params.set('technology', filters.technology)
            else params.delete('technology')
            if(filters.location) params.set('type', filters.location)
            else params.delete('type')
            if(filters.experienceLevel) params.set('level', filters.experienceLevel)
            else params.delete('level')
            
            if(currentPage > 1) params.set('page', currentPage)
    
            return params

            // esto ya no se necesita porque SetSearchParams, solo necesita devolver los nuevos parámetros
            // const newUrl = params.toString() ? `${window.location.pathname}?${params.toString()}` : window.location.pathname
    
            // navigateTo(newUrl)
        })

        },[filters,textToFilter,currentPage,setSearchParams])

    // Este efecto me está haciendo un problema porque a veces guarda ciudad de méxico pero no actualiza bien.
    // useEffect(() => {
    //     window.localStorage.setItem('jobsFilters', JSON.stringify(filters))

    // },[filters])

    const handlePageChange = (page) => {   
        setCurrentPage(page)
        if(page > 1) searchParams.set('page', page)
        else searchParams.delete('page')
    }

        
    const handleSearch = (filters) => {
        setHasActiveFilters(true)
        setCurrentPage(1)
        searchParams.delete('page')
        setFilters(filters)
    }

    const handleTextFilter = (newTextToFilter) =>{
        //Esta función no se usa acá, sino que se pasa de parámetro del SearchFormSection y es usada, cuando es llamada en la otra función.

        setTextToFilter(newTextToFilter.toLowerCase()) 
        console.log(textToFilter)
        setCurrentPage(1)
        searchParams.delete('page')

    }
    return {
        loading,
        jobs,
        total,
        currentPage,
        totalPages,
        hasActiveFilters,
        fetchErrors,
        canShowModal : !!fetchErrors,
        textToFilter,
        handlePageChange,
        handleSearch,
        handleTextFilter,
        handleClearFilters
    }
}

export default function SearchPage() {

    const{
        jobs,
        total,
        loading,
        currentPage,
        totalPages,
        hasActiveFilters,
        fetchErrors,
        textToFilter,
        handlePageChange,
        handleSearch,
        handleTextFilter,
        handleClearFilters
    } = useFilter();


    const title = loading ? "Cargando... DevJobs" : `Resultados ${total}, Página ${currentPage} - DevJobs`;
    
  return (
    <>
    <main>
        
        <title>{title}</title>
        <meta name="description" content = "Explora miles de oportunidades laborales en el sector tecnológico. Encuentra tu próximo trabajo en DEVJOBS"/>
        <BreadCrumb/>
        <SearchFormSection 
            initialText = {textToFilter} 
            onSearch={handleSearch} 
            onTextFilter = {handleTextFilter} 
            onClearFilters={handleClearFilters} hasActiveFilters={hasActiveFilters}/>
        
        <section>
            <h2 style={{textAlign:'center'}}>Resultados de Búsqueda</h2>
            { loading &&(
                <Modal>
                    Cargando... 
                    <div className="loader">
                    </div>
                </Modal> 
            
            )}
            {
                fetchErrors &&
                (<Modal>

                    <img className = "errorIcon" src={errorIcon} alt="" />
                    <p> {fetchErrors} </p>
                    <button onClick={() => window.location.reload()}>Reintentar</button>
                </Modal>
            )}

            {!loading && !fetchErrors && (<Job_Listing jobs={jobs}/>)}
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange = {handlePageChange}/>
        </section>
    </main>
    </>
  )
}


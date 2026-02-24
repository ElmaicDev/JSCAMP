import { useEffect,useState } from "react"
import SearchFormSection from "../components/SearchFormSection.jsx"
import Job_Listing from "../components/Job_Listings.jsx" //se puede cambiar el nombre como {Job_Listing as Job}
import Pagination from "../components/Pagination.jsx"
import { Modal } from "../components/Modal.jsx";

const RESULT_PER_PAGE = 4;
const useFilter = () =>
    {
    const initialFilterData = {
        technology: '',
            location: '',
            experience: ''
    }
    const [filters,setFilters] = useState(initialFilterData)
    const [textToFilter, setTextToFilter] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
   
    const [total,setTotal] = useState(0)
    const [jobs, setJobs] = useState([])
    const [loading, setLoading] = useState(true)
    const [hasActiveFilters, setHasActiveFilters] = useState(false)

    const totalPages = Math.ceil(total / RESULT_PER_PAGE)

    const handleClearFilters = () =>{

        setFilters(initialFilterData)
        return setHasActiveFilters(false);
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
                if(filters.experience) params.append('level', filters.experience)
                
                const offset = (currentPage - 1) * RESULT_PER_PAGE
                params.append('limit', RESULT_PER_PAGE) // la cantidad de resultados por página
                params.append('offset', offset) // que se salte cierta cantidad de resultados de la api para que muestre los resultados de la página actual, por ejemplo, si estamos en la página 2, se va a saltar los primeros 4 resultados y va a mostrar los siguientes 4 resultados, es decir, del 5 al 8.


                const queryParams = params.toString() //toString convierte los parámetros a una cadena de texto, por ejemplo "text=react&technology=frontend"

                const response = await fetch(`https://jscamp-api.vercel.app/api/jobs?${queryParams}`) //se le pasan los parámetros a la url, por ejemplo "https://jscamp-api.vercel.app/api/jobs?text=react&technology=frontend"
                const json = await response.json()
                setJobs(json.data)
                setTotal(json.total)
            }
            catch(error){
                console.error('Error fetching jobs:', error);
            }
            finally{
                setLoading(false)
            }
        }
        fecthJobs();
    }
    ,[filters,textToFilter,currentPage]) //con el arreglo vacío solo se renderiza el effect la primer vez

    const handlePageChange = (page) => { 
        setCurrentPage(page)
    }

        
    const handleSearch = (filters) => {
        setCurrentPage(1)
        setFilters(filters)
        setHasActiveFilters(true)
    }

    const handleTextFilter = (newTextToFilter) =>{
        //Esta función no se usa acá, sino que se pasa de parámetro del SearchFormSection y es usada, cuando es llamada en la otra función.
        setTextToFilter(newTextToFilter.toLowerCase()) 
        setCurrentPage(1)
    }
    return {
        loading,
        jobs,
        total,
        currentPage,
        totalPages,
        hasActiveFilters,
        handlePageChange,
        handleSearch,
        handleTextFilter,
        handleClearFilters
    }
}

export function SearchPage() {

    const{
        jobs,
        total,
        loading,
        currentPage,
        totalPages,
        hasActiveFilters,
        handlePageChange,
        handleSearch,
        handleTextFilter,
        handleClearFilters
    } = useFilter();

    useEffect(()=> {
           document.title = `Resultados ${total}, Página ${currentPage} - DevJobs`;

    }, [jobs, currentPage, total]) //además, este array son dependencias de useEffect, es decir, cada vez que cambie alguna de estas variables, se va a ejecutar el useEffect, por ejemplo, cada vez que cambie el total de resultados o la página actual, se va a actualizar el título de la página con el número de resultados y la página actual.



  return (
    <>
    <main>
        <SearchFormSection onSearch={handleSearch} onTextFilter = {handleTextFilter} onClearFilters={handleClearFilters} hasAtiveFilters={hasActiveFilters}/>
        {
            loading ? 
            <Modal>
                Cargando... 
                <div className="loader">
                </div>
            </Modal> 
            : <Job_Listing jobs={jobs}/>
        
        }
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange = {handlePageChange}/>
    </main>
    </>
  )
}


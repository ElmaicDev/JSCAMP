import { use, useEffect,useState } from "react"
import SearchFormSection from "../components/SearchFormSection.jsx"
import Job_Listing from "../components/Job_Listings.jsx" //se puede cambiar el nombre como {Job_Listing as Job}
import Pagination from "../components/Pagination.jsx"
import jobsData from "../src/data.json"

const RESULT_PER_PAGE = 4;
const useFilter = () =>
    {
    const [filters,setFilters] = useState({
        technology: '',
            location: '',
            experience: ''
    })
    const [textToFilter, setTextToFilter] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
   
    const [total,setTotal] = useState(0)
    const [jobs, setJobs] = useState([])
    const [loading, setLoading] = useState(true)

    const totalPages = Math.ceil(jobs?.length / RESULT_PER_PAGE)

    //En react no se puede hacer una llamada asíncrona dentro de un componente o un custom hook, por eso, así toca hacer el fetch dentro del useEffect
    useEffect(() => {

        async function fecthJobs(){

            try{
                setLoading(true)

                const response = await fetch('https://jscamp-api.vercel.app/api/jobs')
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
    ,[]) //con el arreglo vacío solo se renderiza el effect la primer vez

    const handlePageChange = (page) => { 
        setCurrentPage(page)
    }

        
    const handleSearch = (filters) => {
        setCurrentPage(1)
        setFilters(filters)
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
        handlePageChange,
        handleSearch,
        handleTextFilter
    }
}

export function SearchPage() {

    const{
        jobs,
        total,
        loading,
        currentPage,
        totalPages,
        handlePageChange,
        handleSearch,
        handleTextFilter
    } = useFilter();

    useEffect(()=> {
           document.title = 'Resultados ${total}, Página ${currentPage} - DevJobs';

    }, [jobs, currentPage])



  return (
    <>
    <main>
        <SearchFormSection onSearch={handleSearch} onTextFilter = {handleTextFilter}/>
        {loading ? <p>Cargando...</p> : <Job_Listing jobs={jobs}/>}
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange = {handlePageChange}/>
    </main>
    </>
  )
}


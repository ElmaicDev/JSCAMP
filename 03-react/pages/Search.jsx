import { useEffect,useState } from "react"
import SearchFormSection from "../components/SearchFormSection.jsx"
import Job_Listing from "../components/Job_Listings.jsx" //se puede cambiar el nombre como {Job_Listing as Job}
import Pagination from "../components/Pagination.jsx"
import jobsData from "../src/data.json"


export function SearchPage() {

    const [filters,setFilters] = useState({
        technology: '',
            location: '',
            experience: ''
    })
    const [textToFilter, setTextToFilter] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    const RESULT_PER_PAGE = 3

    const jobFilterByFilters = jobsData.filter(job => {
        return (filters.technology === '' || job.data.technology === filters.technology) &&
               (filters.location === '' || job.data.modalidad === filters.location) &&
               (filters.experience === '' || job.data.nivel === filters.experience ) // 
    })

    const jobsFilter = textToFilter === '' ? jobFilterByFilters : jobFilterByFilters.filter((job)=>{
       return job.titulo.toLowerCase().includes(textToFilter)
    })

    const totalPages = Math.ceil(jobsFilter.length/RESULT_PER_PAGE)

    // el slice no incluye el objeto que hay en el índice final
    const pagedResults = jobsFilter.slice((currentPage -1) * RESULT_PER_PAGE, currentPage * RESULT_PER_PAGE) // Acá indico un slice de la data según los resultados que quiero mostrar 
    // GENERALMENTE LA PAGINACIÓN SE HACE EN EL BACKEND, SOLO EN CASOS CONCRETOS SE HACE A NIVEL DE API -> LUEGO SE QUITA Y SE HACE EN EL BACK
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

    useEffect(()=> {
            const handleResize =  () => {
            console.log('cambiando tamaño')
            console.log(window.innerHeight,window.innerWidth)
        }

        window.addEventListener('resize',handleResize)

        return () => {
            window.removeEventListener('resize',handleResize) // Esto lo que hace directamente es eliminar los eventos que se alamacenaron para no ocupar innecesariamente memoria
        }

    }, [])



  return (
    <>
    <main>
        <SearchFormSection onSearch={handleSearch} onTextFilter = {handleTextFilter}/>
        <Job_Listing jobs={pagedResults}/>
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange = {handlePageChange}/>
    </main>
    </>
  )
}


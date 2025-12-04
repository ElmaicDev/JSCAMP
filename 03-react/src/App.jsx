import { useState } from "react"
import Footer from "../components/Footer.jsx"
import Header  from "../components/Header.jsx"
import SearchFormSection from "../components/SearchFormSection.jsx"
import Job_Listing from "../components/Job_Listings.jsx" //se puede cambiar el nombre como {Job_Listing as Job}
import Pagination from "../components/Pagination.jsx"
import jobsData from "../src/data.json"


function App() {

    const [currentPage, setCurrentPage] = useState(1)
    const RESULT_PER_PAGE = 3
    const totalPages = Math.ceil(jobsData.length/RESULT_PER_PAGE)

    // el slice no incluye el objeto que hay en el índice final
    const pagedResults = jobsData.slice((currentPage -1) * RESULT_PER_PAGE, currentPage * RESULT_PER_PAGE) // Acá indico un slice de la data según los resultados que quiero mostrar 
    // GENERALMENTE LA PAGINACIÓN SE HACE EN EL BACKEND, SOLO EN CASOS CONCRETOS SE HACE A NIVEL DE API -> LUEGO SE QUITA Y SE HACE EN EL BACK
    const handlePageChange = (page) => { 
        setCurrentPage(page)
    }

  return (
    <>
    <Header></Header>
    
    <main>
        <SearchFormSection/>
        <Job_Listing jobs={pagedResults}/>
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange = {handlePageChange}/>
    </main>
    <Footer></Footer>
    </>
  )
}

export default App

import Footer from "../components/Footer.jsx"
import Header  from "../components/Header.jsx"
import SearchFormSection from "../components/SearchFormSection.jsx"
import Job_Listing from "../components/Job_Listings.jsx" //se puede cambiar el nombre como {Job_Listing as Job}
import Pagination from "../components/Pagination.jsx"

function App() {

  return (
    <>
    <Header></Header>
    
    <main>
        <SearchFormSection/>
        <Job_Listing/>
        <Pagination/>
    </main>
    <Footer></Footer>
    </>
  )
}

export default App

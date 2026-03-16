import { Routes, Route } from "react-router"

import { HomePage } from "../pages/Home.jsx"
import { SearchPage } from "../pages/Search.jsx"
import { NotFoundPage } from "../pages/404.jsx"
import { ContactPage } from "../pages/Contact.jsx"
import { Header } from "../components/Header.jsx"
import { Footer } from "../components/Footer.jsx"
import { JobDetail } from "../pages/Detail.jsx"

function App() {
    

    return (
    <>
        <Header></Header>
        {/* Routes es un contenedor que agrupa todas las rutas. */}
        <Routes> 
          {/* Route es cada ruta individual */}
          <Route path="/" element={<HomePage/>} />
          <Route path="/search" element={<SearchPage/>} />
          <Route path="/jobs/:JobId" element={<JobDetail/>} />
          <Route path="/contact" element={<ContactPage/>}/>
          <Route path="*" element={<NotFoundPage/>} />
        </Routes>
        <Footer></Footer>
    </>
  )
}

export default App

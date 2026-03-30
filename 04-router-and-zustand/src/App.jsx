import { lazy, Suspense } from "react"
import { Routes, Route } from "react-router"


import {Header} from "./components/Header.jsx"
import {Footer} from "./components/Footer.jsx"
import { ProtectedRoute } from "./components/ProtectedRoutes.jsx"

// lazy load ayuda a cargar únicamente lo que necesita la página
const HomePage = lazy(() => import('./pages/Home.jsx')) // para que este tipo de importacion funcione, se debe exportar el export default.
const SearchPage = lazy(() => import('./pages/Search.jsx')) 
const NotFoundPage = lazy(() => import('./pages/404.jsx'))
const ContactPage = lazy(() => import('./pages/Contact.jsx'))
const JobDetail = lazy(() => import('./pages/Detail.jsx'))
const ProfilePage = lazy(() => import('./pages/Profile.jsx'))
const Login = lazy(() => import('./pages/Login.jsx'))
const Register = lazy(() => import('./pages/Register.jsx'))

function App() {

    return (
    <>
        <Header></Header>
        
        {/* Sirve para que si el internet está muy lento, muestre que la página está cargando mientras carga los archivos necesarios del lazy load */}
        <Suspense> 
          {/* Routes es un contenedor que agrupa todas las rutas. */}
          <Routes> 
            {/* Route es cada ruta individual */}
            <Route path="/" element={<HomePage/>} />
            <Route path="/search" element={<SearchPage/>} />
            <Route path="/jobs/:JobId" element={<JobDetail/>} />
            <Route path="/contact" element={<ContactPage/>}/>
            <Route path="/profile" element={
              <ProtectedRoute redirectTo="/login">
                <ProfilePage/>
              </ProtectedRoute>
              }/>
            <Route path="/login" element = {<Login/>}/>
            <Route path="/register" element = {<Register/>}/>
            <Route path="*" element={<NotFoundPage/>} />
          </Routes>
        </Suspense>
        <Footer></Footer>
    </>
  )
}

export default App

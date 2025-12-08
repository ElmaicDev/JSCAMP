import Footer from "../components/Footer.jsx"
import Header  from "../components/Header.jsx"
import { HomePage } from "../pages/Home.jsx"
import { SearchPage } from "../pages/Search.jsx"
import { NotFoundPage } from "../pages/404.jsx"
import { useState, useEffect } from "react"


function App() {
     
  const [currentPath,setCurrentPath] = useState(window.location.pathname)  

  let page = <NotFoundPage/>

  if(currentPath === '/'){
    page = <HomePage/>
  }
  else if(currentPath === '/search'){
    page = <SearchPage/>
  }

  useEffect(()=>{
    const handleLocationChanged = () => {
        console.log('cambia')
        setCurrentPath(window.location.pathname)
    }

    window.addEventListener('popstate', handleLocationChanged)

    return () => 
        {
            window.removeEventListener('popstate',handleLocationChanged)
        }
  },[])

  return (
    <>
    <Header></Header>

    {page}

    <Footer></Footer>
    </>
  )
}

export default App

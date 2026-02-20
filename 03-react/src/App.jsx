import { HomePage } from "../pages/Home.jsx"
import { SearchPage } from "../pages/Search.jsx"
import { NotFoundPage } from "../pages/404.jsx"
import { Route } from "../components/Route.jsx"
import { ContactPage } from "../pages/Contact.jsx"
import { Header } from "../components/Header.jsx"
import { Footer } from "../components/Footer.jsx"


function App() {
     
    // const {currentPath} = useRouter()

    // let page = <NotFoundPage/>

    // if(currentPath === '/'){
    //     page = <HomePage/>
    // }
    // else if(currentPath === '/search'){
    //     page = <SearchPage/>
    // }

    return (
    <>
        <Header></Header>
        <Route path="/" component={HomePage} />
        <Route path="/search" component={SearchPage} />
        <Route path="/contact" component={ContactPage}/>
        <Route path="*" component={NotFoundPage} />
        <Footer></Footer>
    </>
  )
}

export default App

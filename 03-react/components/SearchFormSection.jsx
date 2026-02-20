import { useState, useId } from "react" //Es usado para crear identificadores únicos, útil sobre todo en formularios para cuando la app sea muy grande no correr el riesgo de reutilizar nombres

const useSearchForm = ({technologyId, locationId, experienceId, onSearch, onTextFilter}) => {
  
    const [searchText, setSearchText] = useState('')
  
    const handleSearchChanged = (event) => {
            

            event.preventDefault()
            // const formData = new FormData(event.target) este event.target envía el botón o formulario que disparó el evento, mientras que event.currentTarget envía el formulario 
            const formData = new FormData(event.currentTarget)

            //De esta forma filters va a estar guardando la información de cada filtro aplicado
            const filters = {
                search: formData.get(searchText),
                technology: formData.get(technologyId),
                location: formData.get(locationId),
                experience: formData.get(experienceId)
            }

            onSearch(filters)
        }
        
        const handleTextChanged = (event) => {
            const text = event.target.value
            setSearchText(text)
            onTextFilter(text)
        }
        return {searchText,
            handleSearchChanged,
            handleTextChanged
        }
}

function SearchFormSection({onSearch, onTextFilter}){
    const searchId = useId()
    const technologyId = useId()
    const locationId = useId()
    const experienceId = useId()
    // const handleSubmit = (event) => { antes era handle submit pero ahora tiene que ser handleChanged
    const {
        handleSearchChanged, 
        handleTextChanged} = useSearchForm({technologyId, locationId, experienceId, onSearch, onTextFilter})

    return (
        
      <section>
            <h1>Encuentra tu próximo Tabajo</h1>
            <p>Explora las últimas ofertas de empleo en el sector tecnológico y encuentra la oportunidad perfecta para ti.</p>
            {/* <form onSubmit={handleSubmit} role="search" id="empleos-search-form"> así estaba para controla el submit*/}
            <form onChange={handleSearchChanged} role="search" id="empleos-search-form">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-search"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M21 21l-6 -6" /></svg>
                        <input onChange = {handleTextChanged} name={searchId} id="empleos-search-input" type="text" placeholder="Buscar empleos por título, habilidad o empresa" />
                    </div>
                    <div className="filtros">
                        <select name={technologyId} id="filter-technology">
                        <option value="">Tecnología</option>
                        <optgroup label="Tecnologías populares">
                        <option value="javascript">JavaScript</option>
                        <option value="python">Python</option>
                        <option value="react">React</option>
                        <option value="nodejs">Node.js</option>
                        </optgroup>
                        <option value="java">Java</option>
                        <hr />
                        <option value="csharp">C#</option>
                        <option value="c">C</option>
                        <option value="c++">C++</option>
                        <hr />
                        <option value="ruby">Ruby</option>
                        <option value="php">PHP</option>
                    </select>

                    <select name={locationId} id="filter-location">
                        <option value="">Ubicación</option>
                        <option value="remoto">Remoto</option>
                        <option value="cdmx">Ciudad de México</option>
                        <option value="guadalajara">Guadalajara</option>
                        <option value="monterrey">Monterrey</option>
                        <option value="barcelona">Barcelona</option>
                    </select>

                    <select name={experienceId} id="filter-experience-level">
                        <option value="">Nivel de experiencia</option>
                        <option value="junior">Junior</option>
                        <option value="mid">Mid-level</option>
                        <option value="senior">Senior</option>
                        <option value="lead">Lead</option>
                    </select>
                </div>
                </form>
        </section> 

    )

}

export default SearchFormSection
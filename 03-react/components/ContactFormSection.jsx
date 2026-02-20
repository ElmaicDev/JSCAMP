import { useCheckForm } from "../hooks/useCheckForm"
import { Modal } from "./Modal"
export function ContactFormSection(){

    const {values,errors,isModalOpen,handleSubmit, handleChange,handleBlur,setIsModalOpen} = useCheckForm({
        email : "",
        numero : "",
        nombre : "",
        mensaje:""
    })

    
    return(
        <section className="contact">
            <h2>Formulario de Contacto</h2>
            <form onSubmit={handleSubmit}>
                <div className="contactForm">

                    <div>
                        <label htmlFor="email">Correo:</label>
                        <input name="email" type="text" id="email" placeholder="algo@ejemplo.com" onBlur={handleBlur} onChange={handleChange} aria-invalid={errors.email} required value={values.email}/>
                        {/* !!errors.email convierte esto en un booleano. Y ademas, la línea de abajo es un renderizado condicional, depende lo de la izquierda para renderizar el span */}
                        {!!errors.email && <span className="invalid">{errors.email}</span>} 
                    </div>

                    <div>
                        <label htmlFor="name">Nombre:</label>
                        <input name="nombre" type="text" id ="name" placeholder="nombre completo" onBlur={handleBlur} onChange={handleChange} required value={values.nombre} />
                    </div>

                    <div>
                        <label htmlFor="numero">Numero:</label>
                        <input name="numero" type = "text" id="numero" placeholder="numero movil" onBlur={handleBlur} onChange={handleChange} aria-invalid={errors.numero} required value={values.numero}></input>
                        {!!errors.numero && <span className="invalid">{errors.numero}</span>} 
                    </div>

                    <div>
                        <label htmlFor="mensaje"> ¿Por qué nos escribes?</label>
                        <textarea name = "mensaje" className="textArea" id="mensaje" placeholder="Escribe tu mensaje aquí" value={values.mensaje} onChange={handleChange} onBlur = {handleBlur}></textarea>
                    </div>

                    <button className="button" type="submit"> <p>Enviar Respuesta</p></button>                
                </div>
            </form>

            {isModalOpen && (
                <Modal onClose={() => setIsModalOpen(false)}>
                    <h2>¡Gracias por contactarnos!</h2>
                    <p>Hemos recibido tu mensaje y nos pondremos en contacto contigo pronto.</p>
                    <button className="button" onClick={() => setIsModalOpen(false)}>Cerrar</button>
                </Modal>
            )}
        </section> 
    )
}
export function Link({href, children, ...restOfProps }){
    //href es el destino, children es lo que envuelve y esta función puede obtener cualquier montón de propiedades que quiera.
    const handleClick = (event) => {
        event.preventDefault() //Este preventDefault desactiva el click para viajar a la url correcta.

        window.history.pushState({},'',href) //Esto indica que cambie la historia de la ventana, es decir, cuando esto cambia, cambia la url

        window.dispatchEvent(new PopStateEvent('popstate')) // esto es para enviar un evento. El popState es un evento que avisa que la url cambió.
    }

    return(
        <a href={href} {...restOfProps} onClick={handleClick}>
            {children}
        </a>
    )
}
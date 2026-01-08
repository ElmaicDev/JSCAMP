import { useRouter } from "../hooks/useRouter"

export function Link({href, children, ...restOfProps }){

    const {navigateTo} = useRouter()

    //href es el destino, children es lo que envuelve y esta función puede obtener cualquier montón de propiedades que quiera.
    const handleClick = (event) => {
        event.preventDefault() //Este preventDefault desactiva el click para viajar a la url correcta.
        navigateTo(href)
    }

    return(
        <a href={href} {...restOfProps} onClick={handleClick}>
            {children}
        </a>
    )
}
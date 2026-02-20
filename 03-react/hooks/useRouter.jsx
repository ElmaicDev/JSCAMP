import { useEffect, useState } from "react"

// Así se puede definir un custom hook.
export function useRouter(){
    const [currentPath,setCurrentPath] = useState(window.location.pathname)  

    useEffect(()=>{
    const handleLocationChanged = () => {
        setCurrentPath(window.location.pathname)
      }

      window.addEventListener('popstate', handleLocationChanged)

      return () => 
      {
        window.removeEventListener('popstate',handleLocationChanged)
      }
  },[])

  function navigateTo(path){
    window.history.pushState({},'',path) //Esto indica que cambie la historia de la ventana, es decir, cuando esto cambia, cambia la url
    window.dispatchEvent(new PopStateEvent('popstate')) // esto es para enviar un evento. El popState es un evento que avisa que la url cambió.
    
  }

  return {
    currentPath,
    navigateTo
  }
}



// REGLA IMPORTANTE PARA LOS HOOKS: Solo se pueden llamar en el nivel más alto de un componente o de otro hook. No se pueden llamar dentro de condicionales, bucles o funciones anidadas.
// Y mucho menos en eventos como onClick, onChange, etc. Tampoco dentro de un efecto, como useEffect.

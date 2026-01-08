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

import { useNavigate, useLocation } from "react-router"

// Así se puede definir un custom hook.
export function useRouter(){
    const navigate = useNavigate() // permite navegar de forma programática 
    const location = useLocation() // nos devuelve el currentPath de nuestra url, query params y url completa 
  

    function navigateTo(path){
      navigate(path)
      
    }

  return {
    currentPath: location.pathname,
    navigateTo
  }
}



// REGLA IMPORTANTE PARA LOS HOOKS: Solo se pueden llamar en el nivel más alto de un componente o de otro hook. No se pueden llamar dentro de condicionales, bucles o funciones anidadas.
// Y mucho menos en eventos como onClick, onChange, etc. Tampoco dentro de un efecto, como useEffect.

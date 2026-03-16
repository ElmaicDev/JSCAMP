import { useLocation } from "react-router";
import { Link } from "./Link";

export function BreadCrumb() {

    const location = useLocation()
    const partes = location.pathname.split('/').filter(Boolean) // .filter*Boolean elimina los string vacíos.

    return(

        <nav>
            <Link href={'/'}> Inicio </Link>

            {partes.map((parte, index) => {

                const rutaAcumulada = '/' + partes.slice(0, index + 1).join('/')
                const esUltimo = index === partes.length

                return(
                        <span key={rutaAcumulada}>
                            <span>/</span>
                            {
                                esUltimo ? <span>{parte}</span> : <Link href={rutaAcumulada} >{parte}</Link>
                            }
                        </span>
                        
                )
                })
            }
        </nav>


    )

}
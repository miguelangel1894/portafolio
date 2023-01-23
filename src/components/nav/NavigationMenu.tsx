import { Link } from "react-router-dom"
import '../../css/navigation.css'
import { Logo } from "./Logo"

export const NavigationMenu = () =>{
    return(
        <div className="navigation-container">
                <Logo logo={'./logo.svg'}/>
                <div className="link-container">
                    <span><Link to="/portafolio">Quien soy</Link></span>
                    <span><Link to="trayectoria">Trayectoria</Link></span>
                    <span><Link to="Proyectos">Proyectos</Link></span>
                    <span><Link to="contacto">Contacto</Link></span>  
                </div>
        </div>

    )
}
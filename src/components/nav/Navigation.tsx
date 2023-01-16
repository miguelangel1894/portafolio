import { Link, Route, Routes } from 'react-router-dom'
import '../../css/navigation.css'
import { Contacto } from '../../page/Contacto'
import { Home } from '../../page/Home'
import { Proyectos } from '../../page/Proyectos'
import { Trayectoria } from '../../page/Trayectoria'


export const Navigation = () =>{
    return(
        <div>
            <div className="navigation-container">
                <span><Link to="/">Quien soy</Link></span>
                <span><Link to="trayectoria">Trayectoria</Link></span>
                <span><Link to="Proyectos">Proyectos</Link></span>
                <span><Link to="contacto">Contacto</Link></span>  
            </div>
            
            <Routes>
                <Route path='/portafolio' element={<Home/>}/>
                <Route path='/trayectoria' element={<Trayectoria/>}/>
                <Route path='/proyectos' element={<Proyectos/>}/>
                <Route path='/contacto' element={<Contacto/>}/>
                <Route path='*' element={<Home/>}/>
            </Routes>
        </div>
    )
}
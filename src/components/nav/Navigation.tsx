import { Link, Route, Routes } from 'react-router-dom'
import '../../css/navigation.css'
import { Contacto } from '../../page/Contacto'
import { Home } from '../../page/Home'
import { Proyectos } from '../../page/Proyectos'
import { Trayectoria } from '../../page/Trayectoria'


export const Navigation = () =>{
    return(
        <div className='reactive-container'>
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
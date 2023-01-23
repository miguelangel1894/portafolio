import '../css/trayectory.css'
import 'react-loading-skeleton/dist/skeleton.css'
import Skeleton,  { SkeletonTheme }  from 'react-loading-skeleton'

import { useGetDocs } from '../hooks/useGetDocs'
import { CardTrayectory } from '../components/cardTrayectory/CardTrayectory'
import { CardTrayectorySkeleton } from '../components/skeleton/CardTrayectorySkeleton'

  
  export const Trayectoria = () =>{
      
    const {docs, isLoading} = useGetDocs('trayectoria')
    
    return(
        <SkeletonTheme baseColor="#0b6c62" highlightColor="#26a79a">
            <div className="trayectory-container">
                
                {<h2>Trayectoria Profesional</h2>}
                
                {isLoading || <CardTrayectorySkeleton />}
                
                {docs.map((doc)=>(
                    <CardTrayectory key={doc.id} doc={doc}/>
                ))}
                
            

                <a href="https://www.linkedin.com/in/mbohorquez65/" target="_blank">Trayectoria</a>
                
            </div>
        </SkeletonTheme>
    )
}
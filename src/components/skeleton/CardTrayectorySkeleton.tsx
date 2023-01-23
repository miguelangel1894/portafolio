import 'react-loading-skeleton/dist/skeleton.css'
import Skeleton from 'react-loading-skeleton'

export const CardTrayectorySkeleton = () =>{
    return(
        <div className="columns" style={{'display':'flex', 'flexDirection':'row'}}>
            <div className="info-trayectory">
                <p className='description-trayectory'>{<Skeleton count={4}/>}</p>
                                                   
            </div>                   
        </div>
    )
}
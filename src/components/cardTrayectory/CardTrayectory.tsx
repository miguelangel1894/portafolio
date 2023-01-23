import { GetAllJobs } from "../../interfaces/CRUDInterface"
import { Date } from '../date/Date'

export interface Props{
    doc: GetAllJobs
}

export const CardTrayectory = ({doc}: Props) =>{
    return(
        <div className="columns" key={doc.id} style={{'display':'flex', 'flexDirection':'row'}}>
            <div className="info-trayectory">
                <p className='description-trayectory'>{doc.description}</p>
                <Date date={doc.date } company={doc.company}/>                                     
            </div>                   
        </div>
    )
}
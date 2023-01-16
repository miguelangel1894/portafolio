import { CSSProperties } from 'react'
import '../../css/description.css'

export interface Props{
    icon:string
    description: string
    classname?: CSSProperties
}

export const ProfileContact =({icon, description, classname}: Props)=>{
    return(
        <div className="contact-container" >
            <img src={icon} alt="" />
            <p>{description}</p>
        </div>
    )
}
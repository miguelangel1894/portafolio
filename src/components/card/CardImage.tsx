import { CSSProperties } from "react"

export interface Props{
    img?: string,
    classname?: string,
    style?: CSSProperties
}

export const CardImage = ({img = '', classname, style} : Props) =>{

    return(
        <img src={img ? img : img} 
             alt="card-image" 
             className={classname}
             style={style}/>
    )
}
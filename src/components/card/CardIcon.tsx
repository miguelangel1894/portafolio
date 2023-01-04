import { CSSProperties, useContext } from "react"
import { CardContext } from "./Card"

export interface Props{
    icon?: string,
    className?: string,
    style?: CSSProperties

}

export const CardIcon = ({icon, className, style} : Props) =>{

    const { card } = useContext(CardContext)

    return(
        <div className={className}
            style={style}>
            <p>{icon ? icon : card.icon}</p>
        </div>
    )
}

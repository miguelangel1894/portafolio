import { useContext } from "react"
import { CardContext } from "./Card"



export const CardIcon = ({icon} : {icon?: string}) =>{

    const { card } = useContext(CardContext)

    return(
        <div className="card-category">
            <p>{icon ? icon : card.icon}</p>
        </div>
    )
}
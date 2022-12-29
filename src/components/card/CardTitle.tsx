import { useContext } from "react"
import { CardContext } from "./Card"

export const CardTitle = ({title}: {title?: string}) =>{

    const { card } = useContext(CardContext)

    return(
        <h3>{title ? title : card.title }</h3>
    )
}
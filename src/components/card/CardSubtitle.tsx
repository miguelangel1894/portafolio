import { useContext } from "react"
import { CardContext } from "./Card"

export const CardSubtitle = ({subtitle}: {subtitle?: string}) =>{
    
    const { card } = useContext(CardContext)

    return(
        <p>{subtitle ? subtitle : card.subtitle}</p>
    )
}
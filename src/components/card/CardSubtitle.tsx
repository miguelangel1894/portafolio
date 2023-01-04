import { CSSProperties, useContext } from "react"
import { CardContext } from "./Card"

export interface Props{
    subtitle?: string,
    className?: string,
    style?: CSSProperties 
}

export const CardSubtitle = ({subtitle, className, style}: Props) =>{
    
    const { card } = useContext(CardContext)

    return(
        <p  className={className}
            style={style}>
                {subtitle ? subtitle : card.subtitle}
        </p>
    )
}
import { CSSProperties, useContext } from "react"
import { CardContext } from "./Card"

export interface Props{
    title?: string,
    className?: string,
    style?: CSSProperties
}

export const CardTitle = ({title, className, style}: Props) =>{

    const { card } = useContext(CardContext)

    return(
        <h3 className={className}
            style={style}>
                {title ? title : card.title }
        </h3>
    )
}
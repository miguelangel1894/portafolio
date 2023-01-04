import { createContext, CSSProperties, ReactElement } from "react"
import { CardContextProps, CardInterface } from "../../interfaces/cardInterfaces"

export interface Props{
    card: CardInterface
    children?: ReactElement | ReactElement[]
    classname?: string,
    style?: CSSProperties
}

export const CardContext = createContext({} as CardContextProps)
const {Provider} = CardContext

export const Card = ({children, card, classname, style}: Props) =>{

    return(
        <Provider value={{
            card
        }}>
            <div className={`${classname}`}
                 style={style}>
                {children}          
            </div>
        </Provider>
    )
}

export default Card
import { createContext } from "react"
import { CardContextProps, CardProps } from "../../interfaces/cardInterfaces"

export const CardContext = createContext({} as CardContextProps)
const {Provider} = CardContext

export const Card = ({children, card}: CardProps) =>{

    return(
        <Provider value={{
            card
        }}>
            <div className="card-container">
                {children}          
            </div>
        </Provider>
    )
}

export default Card
import { Props as CardProps } from "../components/card/Card"


export interface CardInterface {
    id: string
    icon: string
    title: string
    img?: string
    subtitle: string
}

export interface CardContextProps{
    card: CardInterface
}

export interface CardHOCProps {
    ({children, card}: CardProps): JSX.Element,
    Icon:    (Props:{icon?:string, classname?: string})=>JSX.Element,
    Title:   (Props:{title?:string,classname?: string})=>JSX.Element,
    Img:     (Props:{img?: string, classname?: string})=>JSX.Element,
    Subtitle:(Props:{subtitle?:string,classname?: string})=>JSX.Element
}
import { ReactElement } from "react"

export interface CardProps{
    card: Card
    children: ReactElement | ReactElement[]
}

export interface Card {
    id: string
    icon: string
    title: string
    img?: string
    subtitle: string
}

export interface CardContextProps{
    card: Card
}
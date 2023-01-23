import {Props as ProfileProps} from '../components/Profile/Profile'

export interface ProfileInterface{
    logo: string,
    img?: string,
    status?: string,
    title: string,
    education: string,
    description: string
}

export interface ProfileContextProps{
    profile: ProfileInterface
}

export interface CardHOCProps {
    ({children, profile}: ProfileProps): JSX.Element,
    Logo:    (Props:{logo?:string, classname?: string})=>JSX.Element,
    Img:     (Props:{img?:string,  classname?: string})=>JSX.Element,  
}
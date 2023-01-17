import '../../css/profile.css'
import { createContext, CSSProperties, ReactElement } from 'react'
import { ProfileInterface, ProfileContextProps } from '../../interfaces/profileInterfaces'


export interface Props{
    profile: ProfileInterface,
    children?: ReactElement | ReactElement[],
    classname?: string,
    style?: CSSProperties
}

export const ProfileContext = createContext({} as ProfileContextProps)
const {Provider} = ProfileContext

export const Profile = ({children, profile, classname, style}: Props) =>{
    return(
        <Provider value={{profile}}>
            <div className={`profile-container`}
                style={style}>
                {children}
            </div>
        </Provider>
    )
}

export default Profile
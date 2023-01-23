import { ReactElement } from "react"
import { SkillImage } from "../../interfaces/skillInterfaces"
import '../../css/icon-skills.css'

export interface Props{
    icons: SkillImage
    children?: ReactElement | ReactElement[]
}

export const Skill = ({children, icons}: Props) =>{
    return(
        <div className="icon-skill-container">
            {children}
        </div>
    )
}
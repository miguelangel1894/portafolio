import '../../css/description.css'

export interface Props{
    description: string
}

export const ProfileDescription =({description}: Props)=>{
    return(
        <div className="description-container">
            <p>{description}</p>
        </div>
    )
}
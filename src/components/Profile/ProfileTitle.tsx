export interface Props{
    title: string
}

export const ProfileTitle =({title}: Props)=>{
    return(
        <div className="title-container">
            <h4>{title}</h4>
        </div>
    )
}
export interface Props{
    status?: string
}

export const ProfileStatus =({status}: Props)=>{
    return(
        <div className="status-container">
            <img src={status} alt="" />
        </div>
    )
}
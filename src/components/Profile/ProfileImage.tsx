export interface Props{
    img?: string
}

export const ProfileImage =({img}:Props) =>{
    return(
        <div className="profileImg-container">
            <img src={img} alt="" />
        </div>
    )
}
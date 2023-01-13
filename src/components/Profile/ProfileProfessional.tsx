export interface Props{
    profile?: string
}

export const ProfileProfessional =({profile}: Props)=>{
    return(
        <div className="profileProfessional-container">
            <span>{profile}</span>
        </div>
    )
}
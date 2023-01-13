export interface Props{
    logo?: string
}

export const ProfileLogo =({logo}: Props)=>{
    return(
        <div className="logo-container">
            <img src={logo} alt="" />
        </div>
    )
}
export interface Props{
    logo?: string
}

export const Logo =({logo}: Props)=>{
    return(
        <div className="logo-container">
            <img src={logo} alt="" />
        </div>
    )
}
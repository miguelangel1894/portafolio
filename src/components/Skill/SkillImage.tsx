export interface Props{
    img: string
    alt: string
}

export const SkillImage =({img, alt}: Props)=>{
    return(
        <img src={img} alt={alt} title={alt} />
    )
}
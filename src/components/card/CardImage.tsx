export const CardImage = ({img = ''}) =>{

    return(
        <img src={img ? img : img} alt="card-image"/>
    )
}
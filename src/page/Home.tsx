import Card from "../components/card"
import { CardIcon } from "../components/card/CardIcon"
import { CardImage } from "../components/card/CardImage"
import { CardSubtitle } from "../components/card/CardSubtitle"
import { CardTitle } from "../components/card/CardTitle"
import data from'../card.json'
import icons from'../icon.json'
import '../css/home.css'
import { Skill } from "../components/Skill/Skill"
import { SkillImage } from "../components/Skill/SkillImage"

export const Home = () =>{
    return(
        <div  className="home-container" style={{'display':'flex','flexDirection':'column'}}>
          <h2>Hola, Soy Miguel</h2>

          <p style={{'width':'60%'}}>
            Soy ingeniero de sistemas y diseñador de interfaces y amante al buen diseño, para mi el " buen diseño " no es
            unicamente aquel que brinda una linda vista al usuario. Tambien debe permitir una experiencia muy agradable en la curva de aprendizaje
            para utilizar una herramienta web.
            Los ultimos 2 años me he desempeñado como desarrollador de videojuegos desarrollando una app de realidad aumentada asi como el ecosistema
            web de la misma.
            Los ultimos 2 años me he desempeñado como desarrollador de videojuegos desarrollando una app de realidad aumentada asi como el ecosistema
            web de la misma.      
          </p>

          <h2>Skills</h2>

          <div className="icon-container">
            {icons.map((icon)=>(
            //-------------------------------------------------------------
              <Skill key={icon.alt}  icons={icon}>
                <SkillImage img={icon.icon} alt={icon.alt}/>
              </Skill>
            //-------------------------------------------------------------  
            ))}
          </div>

          <h2>Experimentos</h2>

          <div  className="cards-group-container" 
                style={{'display':'flex'}}>

          {data.map((tarjeta)=>(
              //-------------------------------------------------------------
                <Card key={tarjeta.id}  card={tarjeta} 
                classname={'card-container'}
                style={{}}>

                <CardImage  img={tarjeta.img} 
                            classname={'card-img'}/>

                <CardIcon   icon={tarjeta.icon} 
                            className={'card-icon'}/>

                <CardTitle  title={tarjeta.title} 
                            className={'card-title'}/>

                <CardSubtitle subtitle='Plataforma de gestión de cursos' 
                            className='card-subtitle'/>
              </Card>
              //------------------------------------------------------------
            ))}

        </div>

            
        </div>
        
    )
}

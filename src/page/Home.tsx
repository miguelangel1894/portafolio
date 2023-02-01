import Card from "../components/card"
import { CardIcon } from "../components/card/CardIcon"
import { CardImage } from "../components/card/CardImage"
import { CardSubtitle } from "../components/card/CardSubtitle"
import { CardTitle } from "../components/card/CardTitle"
import { Skill } from "../components/Skill/Skill"
import { SkillImage } from "../components/Skill/SkillImage"
import data from'../card.json'
import icons from'../icon.json'
import '../css/home.css'

export const Home = () =>{
    return(
        <div  className="home-container">
          <h2>Hola, Bienvenido</h2>

          <p style={{'width':'100%'}}>
            Mi nombre es Miguel Bohorquez, Soy un ingeniero de sistemas apasionado por el desarrollo front end. Durante los 2 ultimos años me he desempeñado como
            desarrollador de videojuegos en la empresa lanzcom studio y al mismo tiempo he emprendido como desarrollador web frelance. El gusto y la pasión por
            diseñar y desarrollar interfaces gráficas es lo que hoy en día se ha convertido en algo que en lo personal disfruto realizar, el poder construir
            piezas gráficas que le permitan a los usuarios vivir una experiencia comoda y agradable en cualquier plataforma web para mi es simplemente Arte.           
          </p>
          <p>
            Hé construido este portafolio desde mi imaginación y solamente deseo que puedas disfrutar tu estancia en él, Bienvenido.
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
                >

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

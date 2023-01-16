import Card, { CardIcon, CardImage, CardSubtitle, CardTitle } from '../components/card'
import '../css/trayectory.css'
import data from'../card.json'
import { Link } from 'react-router-dom'

const card ={
    id: '1',
    icon: 'laptop-outline',
    img: './card01.jpg',
    title: 'Clouds',
    subtitle: 'Esto es un subtitulo'
  }

export const Trayectoria = () =>{
    return(
        <div className="trayectory-container">
            <h2>Trayectoria Profesional</h2>

        {data.map(()=>(

            <div className="columns" key={card.title} style={{'display':'flex', 'flexDirection':'row'}}>
                    <div className="info-trayectory">
                        <p className='description-trayectory'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A cumque omnis molestias reiciendis dolor dolorem deleniti tenetur laborum sit, at laudantium quisquam nobis animi assumenda rem aut quia dignissimos cum!</p>
                        
                    </div>
                    <Card   card={card} 
                        classname={'card-container'}
                        style={{}}>

                        <CardImage  img={card.img} 
                                    classname={'card-img'}/>

                        <CardIcon   icon={card.icon} 
                                    className={'card-icon'}/>

                        <CardTitle  title={card.title} 
                                    className={'card-title'}/>

                        <CardSubtitle subtitle='Plataforma de gestión de cursos' 
                                    className='card-subtitle'/>
                    </Card>
            </div>
        ))}

            <a href="https://www.linkedin.com/in/mbohorquez65/" target="_blank">Trayectoria</a>
            
        </div>
    )
}
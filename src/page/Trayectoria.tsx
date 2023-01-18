import Card, { CardIcon, CardImage} from '../components/card'
import { Date } from '../components/date/Date'
import data from'../card.json'
import '../css/trayectory.css'


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
                        <p className='description-trayectory'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis omnis officia nostrum atque tempora facilis animi, illo autem! Vitae, maiores? Quia ea exercitationem distinctio itaque veniam accusantium delectus id soluta.</p>
                        <Date/>                                     
                    </div>

                   {/*  <Card   card={card} 
                        classname={'card-container'}
                        style={{}}>

                        <CardImage  img={card.img} 
                                    classname={'card-img'}/>

                        <CardIcon   icon={card.icon} 
                                    className={'card-icon'}/>

                    </Card> */}
                     
            </div>
        ))}

            <a href="https://www.linkedin.com/in/mbohorquez65/" target="_blank">Trayectoria</a>
            
        </div>
    )
}
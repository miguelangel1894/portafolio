import './App.css'
import './css/custom-style.css'
import { CardIcon, CardImage, CardSubtitle, CardTitle, Card } from './components/card'
import data from'./card.json'
import { Home } from './page/Home'
import { Navigation } from './components/nav/Navigation'

function App() {

  const card ={
    id: '1',
    icon: 'laptop-outline',
    img: './card01.jpg',
    title: 'Clouds',
    subtitle: 'Esto es un subtitulo'
  }

  return (
    <div className="App" style={{'display':'flex'}}>
      <Navigation/>
      {/* {data.map((tarjeta)=>(

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
      ))} */}
    
      

      {/* {<Card card={card}>
        <Card.Icon/>
        <Card.Image/>
        <Card.Title/>
        <Card.Subtitle/>
      </Card>} */}
    </div>
  )
}

export default App

import './App.css'
import './css/custom-style.css'
import { CardIcon, CardImage, CardSubtitle, CardTitle, Card } from './components/card'

function App() {

  const card ={
    id: '1',
    icon: 'mobile',
    img: './card01.jpg',
    title: 'Clouds',
    subtitle: 'Esto es un subtitulo'
  }

  return (
    <div className="App">
      <Card card={card} 
            classname={'card-container'}
            style={{}}>

        <CardImage  img={card.img}/>
        <CardIcon     icon={card.icon}/>
        <CardTitle    title={card.title}/>
        <CardSubtitle subtitle='Plataforma de gestión de cursos'/>
      </Card>

      {<Card card={card}>
        <Card.Icon/>
        <Card.Image/>
        <Card.Title/>
        <Card.Subtitle/>
      </Card>}
    </div>
  )
}

export default App

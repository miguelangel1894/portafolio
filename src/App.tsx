import './App.css'
import { CardIcon, CardImage, CardSubtitle, CardTitle, Card } from './components/card'



function App() {

  const card ={
    id: '1',
    icon: 'mobile',
    img: '',
    title: 'Clouds',
    subtitle: 'Esto es un subtitulo'
  }

  return (
    <div className="App">
      <Card card={card}>
        <CardImage    img=''/>
        <CardIcon     icon='pc'/>
        <CardTitle    title='Clouds School'/>
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

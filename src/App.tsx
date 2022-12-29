import './App.css'
import { CardIcon, CardImage, CardSubtitle, CardTitle } from './components/card'
import Card from './components/card/Card'


function App() {

  const card ={
    id: '1',
    icon: 'mobile',
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
    </div>
  )
}

export default App

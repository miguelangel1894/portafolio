import './App.css'
import './css/custom-style.css'
import { CardIcon, CardImage, CardSubtitle, CardTitle, Card } from './components/card'
import data from'./card.json'
import { Home } from './page/Home'
import { Navigation } from './components/nav/Navigation'
import { Route, Routes } from 'react-router-dom'
import { Trayectoria } from './page/trayectoria'
import { Proyectos } from './page/Proyectos'
import { Contacto } from './page/Contacto'
import {  Profile,  } from './components/Profile/Profile'
import { ProfileLogo } from './components/Profile/ProfileLogo'
import { ProfileImage } from './components/Profile/ProfileImage'
import { ProfileStatus } from './components/Profile/ProfileStatus'
import { ProfileTitle } from './components/Profile/ProfileTitle'
import { ProfileProfessional } from './components/Profile/ProfileProfessional'

function App() {

  const card ={
    id: '1',
    icon: 'laptop-outline',
    img: './card01.jpg',
    title: 'Clouds',
    subtitle: 'Esto es un subtitulo'
  }

  const profile ={
    logo: './logo.svg',
    img: './card01.jpg',
    status: './estado.svg',
    title: 'Miguel Angel Bohorquez',
    education:'Front-end Developer',
    description:'texto de prueba'
  }


  return (
    <div className="App" style={{'display':'flex'}}>
      <Profile profile={profile} style={{'display':'flex', 'flexDirection':'column'}}>
        <ProfileLogo  logo={profile.logo}/>
        <ProfileImage img={profile.img}/>
        <ProfileStatus status={profile.status}/>
        <ProfileTitle title={profile.title}/>
        <ProfileProfessional profile={profile.education}/>
      </Profile>
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

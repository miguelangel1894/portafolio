import './App.css'
import './css/custom-style.css'
import { Navigation } from './components/nav/Navigation'
import {  Profile,  } from './components/Profile/Profile'
import { ProfileLogo } from './components/Profile/ProfileLogo'
import { ProfileImage } from './components/Profile/ProfileImage'
import { ProfileStatus } from './components/Profile/ProfileStatus'
import { ProfileTitle } from './components/Profile/ProfileTitle'
import { ProfileProfessional } from './components/Profile/ProfileProfessional'
import { ProfileDescription } from './components/Profile/ProfileDescription'
import { ProfileContact } from './components/Profile/ProfileContact'

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
    description:'Soy ingeniero de sistemas y diseñador de interfaces y amante al buen diseño, para mi el " buen diseño " no es unicamente aquel que brinda una linda vista al usuario.'
  }

  const icons={
    map: './icon/Map.svg',
    mapDescription: 'Sincelejo - Colombia',
    mail:'./icon/Mail.svg',
    mailDescription: 'Mbohorquez65@gmail.com',
    git: './icon/github.svg',
    gitDescription: 'github.com/miguelangel1894'
  }


  return (
    <div className="App" style={{'display':'flex'}}>

    {/* //------------------------------------------------------------- */}

        <Profile  profile={profile} 
                  style={{'display':'flex', 'flexDirection':'column', 'width':'35%'}}>
          
          <ProfileLogo  logo={profile.logo}/>
          
          <ProfileImage img={profile.img}/>
          
          <ProfileStatus status={profile.status}/>
          
          <ProfileTitle title={profile.title}/>
          
          <ProfileProfessional profile={profile.education}/>
          
          <ProfileDescription description={profile.description}/>
          
          <ProfileContact icon={icons.map} 
                          description={icons.mapDescription}/>
          
          <ProfileContact icon={icons.mail} 
                          description={icons.mailDescription}/>

          <ProfileContact icon={icons.git} 
                          description={icons.gitDescription}/>
        </Profile>

    {/* //------------------------------------------------------------- */}

      <Navigation/>

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

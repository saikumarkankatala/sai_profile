import React from 'react'
import Header from './Header'
import Intro from './Intro'
import Project_Card from './Project_Card'
import './Profile_Page.css'
import {Projects} from './constants.js'
import Portfolio from './Portfolio.js'
import AboutMe from './AboutMe.js'
import TraitsContainer from './TraitsContainer.js'
import Contact from './Contact.js'

function Profile() {
  return (
    <div>
        <Header/>
        <Intro/>
        <Portfolio/>
        <div className='projectcards-container'>
          {
            Projects.map(item => <Project_Card title ={item.title} description = {item.description} actionLink = {item.actionLink} />)
          }
          
        </div>
        <AboutMe/>
        <TraitsContainer/>
        <Contact/>
       
    </div>

    
  )
}

export default Profile
import React from 'react'
import './Intro.css'
import photo from './assests/Sai_Kankatala.jpeg' 

export default function Intro() {
  return (
    <div>
        <section className='intro-section'>
            <div className='split-section'> 
                <div className='left-section-details'>
                    <p className='left-section-content'>
                    <h2>WELCOME!</h2>

                    My name is Sai Kumar Kankatala, and I'm a driven software engineer who loves 
                    to create creative apps and find solutions to challenges. With valuable industry 
                    experience in e-commerce, I specialize in using technologies such as Java, Spring, 
                    Spring Boot, and MySQL.As a continuous learner, I thrive on adapting to new technologies 
                    and concepts, ensuring I stay at the forefront of software development
                    </p>
                </div>
                <div className='right-section-photo'>
                    <img src= {photo} width="300" height="400"/>
                        
                    
                </div>
            </div>
        </section>
    </div>
  )
}

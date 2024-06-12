import React from 'react'
import './Intro.css'
// import photo from '/assets/Sai_Kankatala.jpeg' 
import resume from './assests/Sai_Kankatala_Ja.pdf'

export default function Intro() {
  return (
    <div>
        <section className='intro-section' id='intro'>
            <div className='split-section'> 
                <div className='left-section-details'>
                    <p className='left-section-content'>
                    <h2>  Hello and Welcome! </h2>

                    <h3>Sai K Kankatala</h3>
                    <div className='intro-text'>
                    I'm a dynamic and innovative Java Full Stack Developer driven by a passion for crafting high-performance, scalable, 
                    and user-centric applications. With expertise in both front-end and back-end technologies, I thrive on solving complex challenges and transforming creative 
                    ideas into seamless digital experiences. Dive into my professional portfolio and discover how my skills and projects can bring value and innovation to your 
                    team.
                    </div>
                    
                    <button> <a href = {resume} target='_blank'>Download Resume</a></button>
                    </p>
                </div>
                <div className='right-section-photo'>
                    <img src= './assets/Sai_Kankatala.jpeg' width="300" height="400"/>
                        
                    
                </div>
            </div>
        </section>
    </div>
  )
}

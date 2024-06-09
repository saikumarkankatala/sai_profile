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
                    <h2>HI! I am Sai K Kankatala</h2>

                    <h3>JAVA FULL STACK DEVELOPER</h3>

                    My tech stack includes Java, Spring, Spring Boot, MySql, JavaScript, React

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

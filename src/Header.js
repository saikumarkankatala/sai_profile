import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className='G-Header'>
        <div className='pname'>
            <a href='#intro' className='intro-head'><h3>Sai K Kankatala</h3></a>
        </div>
        <div className='cta-actions'>
            <a href="#projects" className="duration-200 hover:text-violet-400 action-link" target=""><p>Projects </p></a>
            <a href="#about_me" className="duration-200 hover:text-violet-400 action-link" target=""><p>About Me </p></a>
            <a href="https://www.linkedin.com/in/sai-kankatala/" className="duration-200 hover:text-violet-400 action-link" target="blank"><p>Get in touch </p></a>
        </div>
    </div>
  )
}

export default Header
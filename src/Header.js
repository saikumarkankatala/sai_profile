import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className='G-Header'>
        <div className='pname'>
            <h3>SKK</h3>
        </div>
        <div className='cta-actions'>
            <a href="#projects" className="duration-200 hover:text-violet-400 action-link" target=""><p>Projects </p></a>
            <a href="#projects" className="duration-200 hover:text-violet-400 action-link" target=""><p>About Me </p></a>
            <a href="https://www.linkedin.com/in/sai-kankatala/" className="duration-200 hover:text-violet-400 action-link" target="blank"><p>Get in touch </p></a>
        </div>
    </div>
  )
}

export default Header
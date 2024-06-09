import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'; // Import icons from react-icons
import './Contact.css'

function Contact() {
  return (
    <div className='contact-me'>
        <p>Connect with me</p>
        <div className='social-links'>
            <a href="mailto:saikumarkankatala@gmail.com" target ='blank' className="social-icon"><FaEnvelope /></a>
            <a href="https://github.com/saikumarkankatala" target ='blank' className="social-icon"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/sai-kankatala/" target ='blank' className="social-icon"><FaLinkedin /></a>
        </div>
        <footer>
            © 2024 Sai K Kankatala 
        </footer>
    </div>
  );
}

export default Contact;

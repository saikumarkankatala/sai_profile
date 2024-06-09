import React from 'react'
import './Project_Card.css'

function Project_Card(props) {
  
const {
    title,description,actionLink
}= props

  return (
    <div className='projectcard_container'>
        <div>
            <h3>
                {title}
            </h3>
            <p>
                {description}
            </p>
        </div>

        <div className='projectcard_footer'>
           <a href= {actionLink} target='blank'><button >Go to </button></a> 
        </div>
        
    </div>
  )
}

export default Project_Card
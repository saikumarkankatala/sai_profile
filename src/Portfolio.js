import React from 'react'
import './Portfolio.css'

function portfolio() {
  return (
    <div className='portfolio_container' id='projects'>
        <p>
        A few of my creative endeavors.
            Curious to see my work?
        </p>
        <div>

            <button className='github-cta' >
              <a className='github-cta-label' href='https://github.com/saikumarkankatala' target='blank'>
                <img src='/assets/github.svg'/>
                <div>
                Github
                </div>
              </a>  
            </button>
        </div>
    </div>
  )
}

export default portfolio
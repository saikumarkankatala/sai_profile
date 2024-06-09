import React from 'react'
import './Traits.css'

function Traits(props) {
    const {serial, title, description} = props
  return (
    <div className='traits-container'>
    <div className='traits-grid-container'>
        <div className='trait-serial-number'>{serial}</div>

        <div className='trait-description'>
            <div className='trait-description-title'>{title}</div>
            <div className='trait-description-desc'>
            {description}
            </div>

</div>
    </div>
    </div>
  )
}

export default Traits
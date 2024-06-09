import React from 'react'
import Traits from './Traits'
import {traits} from './constants'
import './TraitsContainer.css'
function TraitsContainer() {
  return (
    <div className='tarits-container'>
    {
        traits.map(trait=><Traits serial ={trait.serial} title ={trait.title} description={trait.description}/>)
    }
    </div>
  )
}

export default TraitsContainer
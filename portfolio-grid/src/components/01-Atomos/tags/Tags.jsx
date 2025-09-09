import React from 'react'
import './tags.css'
const Tags = ({descripcion}) => {
  return (

    <div className='containerTags'>
    <span className='tagIcon'></span>
    <p className='tagDescription'>{descripcion}</p>

    </div>




  )
}

export default Tags
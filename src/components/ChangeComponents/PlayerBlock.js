import React from 'react'

export const PlayerBlock = (props) => {
  return (
    <div className='playerInput'>
      <label htmlFor="title">
        Позивний
      </label>
      <input type="text" name='title'
             onChange={props.handleTitle}
             value={props.title}
      />
      <label htmlFor="subTitle">
        Чим вiдомий?
      </label>
      <input type="text"
             name='subTitle'
             onChange={props.handleSubTitle}
             value={props.subTitle}
      />
    </div>
  )
} 

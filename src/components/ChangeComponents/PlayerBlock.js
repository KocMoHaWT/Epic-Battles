import React from 'react'

export const PlayerBlock = (props) => {
  return (
    <div className='playerInput'>
      <label htmlFor="title">
        Кликуха
      </label>
      <input type="text" name='title'
             onChange={props.handleTitle}
             value={props.title}
      />
      <label htmlFor="subTitle">
        Чем хорош?
      </label>
      <input type="text"
             name='subTitle'
             onChange={props.handleSubTitle}
             value={props.subTitle}
      />
    </div>
  )
} 

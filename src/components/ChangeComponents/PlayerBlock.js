import React from 'react'

export const PlayerBlock = (props) => {
  return (
    <div className='playerInput'>
      <label htmlFor="title">title</label>
      <input type="text" name='title' onChange={props.handleTitle}/>
      <label htmlFor="subTitle">sub title</label>
      <input type="text" name='subTitle' onChange={props.handleSubTitle} />
    </div>
  )
} 
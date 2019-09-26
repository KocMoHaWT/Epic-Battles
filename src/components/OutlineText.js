import React from 'react'

export const OutlineText = (props) => {
  const borderSize = props.borderSize;
  const color = props.color;
  const style = {
    textShadow: `${borderSize} ${borderSize} 0 ${color},
                  -${borderSize} -${borderSize} 0 ${color},
                  ${borderSize} -${borderSize} 0 ${color},
                  -${borderSize} ${borderSize} 0 ${color}`
  }
  return (
    <div id={props.id}
         style={style}>
      {props.children}
    </div>
  )
}
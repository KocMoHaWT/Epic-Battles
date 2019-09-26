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
    <div style={style}>
      {props.children}
    </div>
  )
}
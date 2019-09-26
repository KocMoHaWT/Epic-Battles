import React from 'react'
import {PlayerBlock} from "./PlayerBlock";
import {OutlineText} from "../OutlineText";


class ChangeBlock extends React.Component{
  state = {
    backgroundColor: '#0074D9'
  }

  renderColorVariants = () => {
    let arrayOfVariants = []
    const colorVariants = this.props.colorVariants;
    for(let i = 0; i < colorVariants.length; i++) {
      arrayOfVariants.push(<div id={i}
           key={i}
           className='points variant'
           style={colorVariants[i]}
        onClick={this.props.handleClick}
      >
        <OutlineText
          borderSize='1px'
          color={colorVariants[i].shadowColor}
          id={i}
        >
          5
        </OutlineText>
      </div>)
    }
    return arrayOfVariants
  }

  render() {
    return (
      <div className='changeBlock'>
        <h1>Выберете цвет hp очков</h1>
        <div className='colorGroup'>
          {this.renderColorVariants()}
        </div>
        {this.props.photo && <PlayerBlock
          handleTitle={this.props.handleTitle}
          handleSubTitle={this.props.handleSubTitle}
        />}
      </div>
    )
  }
}

export default ChangeBlock
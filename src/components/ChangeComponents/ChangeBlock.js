import React from 'react'
import {PlayerBlock} from './PlayerBlock';
import PreviewVariant from '../PreviewVariant';



class ChangeBlock extends React.Component {
  state = {
    backgroundColor: '#0074D9'
  }

  renderColorVariants = () => {
    return this.props.colorVariants.map((elem, index) => (
      <PreviewVariant index={index}
                      handleClick={() => this.props.handleClick(index)}
                      backgroundColor={elem.backgroundColor}
                      shadowColor={elem.shadowColor}
      />
    ))

  };

  render() {
    return (
      <div className='changeBlock'>
        <h1>Обери колiр hp очок</h1>
        <div className='colorGroup'>
          {this.renderColorVariants()}
        </div>
        {this.props.photo && <PlayerBlock
          handleTitle={this.props.handleTitle}
          handleSubTitle={this.props.handleSubTitle}
          title={this.props.title}
          subTitle={this.props.subTitle}
        />}
      </div>
    )
  }
}

export default ChangeBlock

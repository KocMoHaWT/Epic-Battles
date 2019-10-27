import React, {Component} from 'react';

import {CardPoints} from "./CardPoints/CardPoints";
import FittedImage from "react-fitted-image";

class Card extends Component {


  render() {
    return (
      <div className='card'>
        <div className="card__img">
          {this.props.photo
            ?
            <FittedImage
              fit="cover"
              loader={<div>Loading</div>}
              onLoad={(...args) => console.log(...args)}
              onError={(...args) => console.log(...args)}
              src={this.props.photo}
            />
            : null}

              <button
               className={!this.props.photo ? "inputFile static" : "inputFile"}
               onClick={this.props.handleButtonClick}
              >
                <div className="loadButton">
                 <span>
                  Завантаж зображення
                  </span>
                </div>
              </button>
              <input type="file"
                     onChange={this.props.handleUploadPhoto}
                     className="hidden"
                     id="inputFile"
                     ref={this.props.refInputFile}
              />


          {this.props.photo &&
          <div className='player'>
            <div className="player__info">
              <span className='title'>{this.props.title}</span>
              <span className='subTitle'>{this.props.subTitle}</span>
            </div>
          </div>}
        </div>
        <div className="card__health">
          <CardPoints
            color={this.props.currentVariant.backgroundColor}
            shadowColor={this.props.currentVariant.shadowColor}/>
        </div>
      </div>
    );
  }
}

export default Card;

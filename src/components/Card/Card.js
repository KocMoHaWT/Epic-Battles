import React, {Component} from 'react';
import {CardPoints} from "../CardPoints/CardPoints";

class Card extends Component {
  state = {
    photo: null
  }

  handleUploadPhoto = (event) => {
    this.setState({
      photo: URL.createObjectURL(event.target.files[0])
    })
  }

  render() {
    return (
      <div className='card'>
        <div className="card__img" >
          {!this.state.photo && <input type="file" onChange={this.handleUploadPhoto}/>}
          <img src={this.state.photo} alt=""/>
        </div>
        <div className="card__health">
          <div className="healthTable">
            <CardPoints/>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
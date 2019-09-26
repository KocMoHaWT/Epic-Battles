import React, {Component} from 'react';
import Card from "../Card/Card";
import ChangeBlock from '../ChangeComponents/ChangeBlock'
import colorJson from '../../colors'

class Page extends Component {
  state = {
    colorVariants: [],

    currentVariant: {backgroundColor : '#745fa4', shadowColor: '#db5965'},
    title: 'Вася',
    subTitle: 'Рубист на рельсах',
    photo: null
  };

  componentDidMount() {
    this.setState({
      colorVariants: colorJson
    })
  }

  handlePickVariant = (e) => {
    console.log(e.target.id);
    const colors = this.state.colorVariants[+e.target.id];
    this.setState({
      currentVariant: {backgroundColor: colors.backgroundColor, shadowColor: colors.shadowColor}
    })
  }

  handleTitle = (e) => {
    this.setState({
    title: e.target.value
    })
  }

  handleSubTitle = (e) => {
    this.setState({
      subTitle: e.target.value
    })
  }

  handleUploadPhoto = (event) => {
    this.setState({
      photo: URL.createObjectURL(event.target.files[0])
    })
  }

  render() {
    return (
     <div>
       <ChangeBlock
         colorVariants={this.state.colorVariants}
         handleClick={this.handlePickVariant}
         handleTitle={this.handleTitle}
         handleSubTitle={this.handleSubTitle}
         photo={this.state.photo}
       />
       <Card
         photo={this.state.photo}
         handleUploadPhoto={this.handleUploadPhoto}
         backgroundColor={this.state.backgroundColor}
         currentVariant={this.state.currentVariant}
         title={this.state.title}
         subTitle={this.state.subTitle}
       />
     </div>
    );
  }
}

export default Page;
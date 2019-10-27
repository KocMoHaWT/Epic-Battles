import React, {Component} from 'react';
import Card from "../Card/Card";
import ChangeBlock from '../ChangeComponents/ChangeBlock'
import colorJson from '../../colors'



class Page extends Component {
  constructor(props) {
    super(props);
    this.refInputFile = React.createRef();
    this.state = {
      colorVariants: [],
      backgroundUrl: '',
      currentVariant: {backgroundColor : '#745fa4', shadowColor: '#db5965'},
      title: 'Марк',
      subTitle: 'Лютий некромант',
      photo: null
    };
  }


  componentDidMount() {
    console.log(colorJson[0].backgroundImage);
    this.setState({
      colorVariants: colorJson[0].colors,
      backgroundImage: colorJson[0].backgroundImage
    })
  }

  handleClick = (id) => {
    console.log(id);
    const colors = this.state.colorVariants[+id];
    this.setState({
      currentVariant: {backgroundColor: colors.backgroundColor, shadowColor: colors.shadowColor}
    })
  }

  handleButtonClick = () => {
    document.getElementById('inputFile').click();
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
    if(event.target.files[0]) {
      this.setState({
        photo: URL.createObjectURL(event.target.files[0])
      })
    }
  };

  render() {
    const style = {
      backgroundImage: `url( ${this.state.backgroundImage})`,
      backgroundSize: 'cover'
    };
    return (
      <div className={this.props.className}>
        <div className="wrapper" style={style}>
          <ChangeBlock
            colorVariants={this.state.colorVariants}
            handleClick={this.handleClick}
            handleTitle={this.handleTitle}
            handleSubTitle={this.handleSubTitle}
            photo={this.state.photo}
            title={this.state.title}
            subTitle={this.state.subTitle}
          />
          <Card
            photo={this.state.photo}
            handleUploadPhoto={this.handleUploadPhoto}
            backgroundColor={this.state.backgroundColor}
            currentVariant={this.state.currentVariant}
            title={this.state.title}
            subTitle={this.state.subTitle}
            handleButtonClick={this.handleButtonClick}
            refInputFile={this.refInputFile}
          />
        </div>
      </div>
    );
  }
}

export default Page;

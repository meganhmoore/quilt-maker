import React from 'react';
import {Shape} from './Shape.js';

const quiltStyles = {
  "pillowcase": {width: '20vw' , height: '20vw'},
  "crib": {width: '30vw' , height: '40vw'}, //66,
  "twin": {width: '40vw' , height: '60vw'}, //60,
  "queen": {width: '60vw' , height: '70vw'}, //55,
  "king": {width: '70vw' , height: '70vw'} //50,
};


export class Quilt extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      width: quiltStyles[this.props.quiltType].width,
      height: quiltStyles[this.props.quiltType].height,
      border: '1px solid',
      padding: '5px',
    };
  };


  updateDims (type) {
    const newStyle = quiltStyles[type]
    this.setState({width: newStyle.width, height: newStyle.height});
  };

  componentDidUpdate(prevProps) {
    if (this.props.quiltType !== prevProps.quiltType) {
      this.updateDims(this.props.quiltType);
    }
  };

  render() {
    return(
      <div style={this.state}>
      <Shape text="blah" type="square"/>
      </div>
    );
  };

}

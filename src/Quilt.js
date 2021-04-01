import React from 'react';
import {Shape} from './Shape.js';
import {quiltStyles} from './styles.js';


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
        <Shape shape="arc"/>
      </div>
    );
  };

}

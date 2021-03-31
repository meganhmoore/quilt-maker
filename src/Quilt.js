import React from 'react';
import Draggable from 'react-draggable';

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
      activeDrags: 0,
      deltaPosition: {
        x: 0, y: 0
      },
      controlledPosition: {
        x: -400, y: 200
      }
    };
  };

  handleDrag(e, ui) {
    const {x, y} = this.state.deltaPosition;
    this.setState({
      deltaPosition: {
        x: x + ui.deltaX,
        y: y + ui.deltaY,
      }
    });
  };

  onStart() {
    this.setState({
      activeDrags: (this.state.activeDrags+1),
    });
  };

  onStop() {
    this.setState({activeDrags: (this.state.activeDrags - 1)});
  };

  onDrop(e) {
    this.setState({activeDrags: (this.state.activeDrags - 1)});
    if (e.target.classList.contains("drop-target")) {
      alert("Dropped!");
      e.target.classList.remove('hovered');
    }
  };

  onDropAreaMouseEnter(e) {
    if (this.state.activeDrags) {
      e.target.classList.add('hovered');
    };
  };

  onDropAreaMouseLeave(e) {
    e.target.classList.remove('hovered');
  };

  // For controlled component
  adjustXPos(e) {
    e.preventDefault();
    e.stopPropagation();
    const {x, y} = this.state.controlledPosition;
    this.setState({controlledPosition: {x: x - 10, y}});
  };

  adjustYPos(e) {
    e.preventDefault();
    e.stopPropagation();
    const {controlledPosition} = this.state;
    const {x, y} = controlledPosition;
    this.setState({controlledPosition: {x, y: y - 10}});
  };

  onControlledDrag(e, position) {
    const {x, y} = position;
    this.setState({controlledPosition: {x, y}});
  };

  onControlledDragStop(e, position) {
    this.onControlledDrag(e, position);
    this.onStop();
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
    const dragHandlers = {onStart: this.onStart, onStop: this.onStop};
    const {deltaPosition, controlledPosition} = this.state;
    return(
      <div style={this.state}>
        <Draggable grid={[25, 25]} {...dragHandlers}>
            <div className="box">I snap to a 25 x 25 grid</div>
        </Draggable>
      </div>
    );
  };

}

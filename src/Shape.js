import React from 'react';
import Moveable from 'react-moveable';
import {shapeStyles} from './styles.js';

export function Shape(props) {
  const shape = props.shape;
  const [target, setTarget] = React.useState();
  const [frame, setFrame] = React.useState({
    translate: [0,0],
    rotate: 0,
    transformOrigin: "50% 50%",
  });

  React.useEffect(() => {
    setTarget(document.querySelector(".target"));
  }, []);

  return(
    <div className="container">
      <div className="target" style={shapeStyles[shape]}>{shape}</div>
      <Moveable
          target={target}
          resizable={true}
          keepRatio={true}
          throttleResize={0}
          originDraggable={true}
          originRelative={true}
          draggable={true}
          throttleDrag={0}
          startDragRotate={0}
          throttleDragRotate={0}
          renderDirections={["nw","n","ne","w","e","sw","s","se"]}
          edge={false}
          zoom={1}
          origin={false}
          padding={{"left":0,"top":0,"right":0,"bottom":0}}
          rotatable={true}
          throttleRotate={0}
          rotationPosition={"top"}
          snappable={true}
          verticalGuidelines={[0,200,400]} // adjust to scale of quilt
          horizontalGuidelines={[0,200,400]}
          snapThreshold={5}
          isDisplaySnapDigit={true}
          snapGap={true}
          snapElement={true}
          snapVertical={true}
          snapHorizontal={true}
          snapCenter={false}
          snapDigit={0}
          onResizeStart={e => {
              e.setOrigin(["%", "%"]);
              e.dragStart && e.dragStart.set(frame.translate);
          }}
          onResize={e => {
              const beforeTranslate = e.drag.beforeTranslate;

              frame.translate = beforeTranslate;
              e.target.style.width = `${e.width}px`;
              e.target.style.height = `${e.height}px`;
              e.target.style.transform = `translate(${beforeTranslate[0]}px, ${beforeTranslate[1]}px)`;
          }}
          onDragOriginStart={e => {
                e.dragStart && e.dragStart.set(frame.translate);
            }}
          onDragOrigin={e => {
              frame.translate = e.drag.beforeTranslate;
              frame.transformOrigin = e.transformOrigin;
          }}
          onDragStart={e => {
              e.set(frame.translate);
          }}
          onDrag={e => {
              frame.translate = e.beforeTranslate;
              e.target.style.transform = `translate(${e.beforeTranslate[0]}px, ${e.beforeTranslate[1]}px)`;
          }}
          onRotateStart={e => {
                e.set(frame.rotate);
            }}
          onRotate={e => {
              frame.rotate = e.beforeRotate;
          }}
          onRender={e => {
              const { translate, rotate, transformOrigin } = frame;
              e.target.style.transformOrigin = transformOrigin;
              e.target.style.transform = `translate(${translate[0]}px, ${translate[1]}px)`
                  +  ` rotate(${rotate}deg)`;
          }}
      />
  </div>
  );
}


export function ShapeTemplate(props) {
  const shape = props.shape;
  const id = props.id;
  const [target, setTarget] = React.useState();
  const [frame, setFrame] = React.useState({
    translate: [0,0],
    rotate: 0,
    transformOrigin: "50% 50%",
  });

  React.useEffect(() => {
    setTarget(document.querySelector(`.${id}`));
  }, []);

  return(
    <div className="container">
      <div className={id} style={shapeStyles[shape]}>{shape}</div>
      <Moveable
          target={target}
          resizable={false}
          keepRatio={true}
          throttleResize={0}
          originDraggable={true}
          originRelative={true}
          draggable={true}
          throttleDrag={0}
          startDragRotate={0}
          throttleDragRotate={0}
          renderDirections={["nw","n","ne","w","e","sw","s","se"]}
          edge={false}
          zoom={1}
          origin={false}
          padding={{"left":0,"top":0,"right":0,"bottom":0}}
          snappable={true}
          verticalGuidelines={[0,200,400]} // adjust to scale of quilt
          horizontalGuidelines={[0,200,400]}
          snapThreshold={5}
          isDisplaySnapDigit={true}
          snapGap={true}
          snapElement={true}
          snapVertical={true}
          snapHorizontal={true}
          snapCenter={false}
          snapDigit={0}
          onResizeStart={e => {
              e.setOrigin(["%", "%"]);
              e.dragStart && e.dragStart.set(frame.translate);
          }}
          onResize={e => {
              const beforeTranslate = e.drag.beforeTranslate;

              frame.translate = beforeTranslate;
              e.target.style.width = `${e.width}px`;
              e.target.style.height = `${e.height}px`;
              e.target.style.transform = `translate(${beforeTranslate[0]}px, ${beforeTranslate[1]}px)`;
          }}
          onDragOriginStart={e => {
                e.dragStart && e.dragStart.set(frame.translate);
            }}
          onDragOrigin={e => {
              frame.translate = e.drag.beforeTranslate;
              frame.transformOrigin = e.transformOrigin;
          }}
          onDragStart={e => {
              e.set(frame.translate);
          }}
          onDrag={e => {
              frame.translate = e.beforeTranslate;
              e.target.style.transform = `translate(${e.beforeTranslate[0]}px, ${e.beforeTranslate[1]}px)`;
          }}
          onRender={e => {
              const { translate, rotate, transformOrigin } = frame;
              e.target.style.transformOrigin = transformOrigin;
              e.target.style.transform = `translate(${translate[0]}px, ${translate[1]}px)`;
          }}
      />
  </div>
  );
}

import React, {useState} from 'react';
import {Quilt, handleChange} from './Quilt.js';
import {pageStyles} from './styles.js';
import {Shape, ShapeTemplate} from './Shape.js';

const selectStyle = {
  padding: '5px',
  color: 'darkteal',
  background: 'thistle',
  marginBottom: '30px',
  justifyContent: "center",
  alignItems: "center"
};

export function QuiltContainer() {
  const [quiltType, setQuiltType] = useState('pillowcase');

  const handleChange = (event) => {
    const updatedType = event.target.value;
    setQuiltType(updatedType);
  };

  return(<div style={{padding:'10px'}}>
    <select name="Quilt Size" style={selectStyle} onChange={handleChange}>
    <option value="pillowcase">Pillowcase</option>
    <option value="crib">Crib</option>
    <option value="twin">Twin</option>
    <option value="queen">Queen</option>
    <option value="king">King</option>
    </select>
    <div style={pageStyles["row"]}>
      <div style={pageStyles["column"]}>
        <ShapeTemplate id="square" shape="square"/>
        <ShapeTemplate id="triangle" shape="triangle"/>
        <ShapeTemplate id="circle" shape="circle"/>
        <ShapeTemplate id="semi-circle" shape="semi-circle"/>
        <ShapeTemplate id="arc" shape="arc"/>
      </div>
      <div style={pageStyles["column"]}>
        <Quilt quiltType={quiltType}/>
      </div>
      <div style={pageStyles["column"]}>
        <button style={selectStyle}>Create Pattern</button>
      </div>
    </div>
    </div>);
}

import React, {useState} from 'react';
import {Quilt, handleChange} from './Quilt.js';

const selectStyle = {
  padding: '5px',
  color: 'darkteal',
  background: 'thistle',
  marginBottom: '30px'
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
    <Quilt quiltType={quiltType}/>
    </div>);
}

const textColor = 'thistle';
const quiltOutlineColor = 'white';
const fillOptions = ['goldenrod', 'rosybrown', 'olive', 'indianred'];

export const styles = {
  textColor: textColor,
  quiltOutlineColor: quiltOutlineColor,
  fillOptions: fillOptions
}

export const quiltStyles = {
  "pillowcase": {width: '40vw' , height: '40vw'},
  "crib": {width: '30vw' , height: '40vw'}, //66,
  "twin": {width: '40vw' , height: '60vw'}, //60,
  "queen": {width: '40vw' , height: '50vw'}, //55,
  "king": {width: '55vw' , height: '50vw'} //50,
}


export const shapeStyles = {
  'square': {
  position: 'inherit',
  textAlign: 'center',
  background: '#ee8',
  color: '#333',
  fontWeight: 'bold',
  border: '1px solid #333',
  boxSizing: 'border-box',
  width: '30vw',
  height: '30vw',
}, 'triangle':{
  position: 'inherit',
  textAlign: 'center',
  fontWeight: 'bold',
	width: '0px',
	height: '0px',
	borderTop: '100px solid #ee8',
	borderRight: '100px solid transparent',
  boxSizing: 'border-box'
}, 'circle': {
  position: 'inherit',
  textAlign: 'center',
  fontWeight: 'bold',
  height: '50vw',
  width: '50vw',
  backgroundColor: '#ee8',
  borderRadius:'50%'
}, 'semi-circle': {
  position: 'inherit',
  textAlign: 'center',
  fontWeight: 'bold',
  height: '20vw',
  width: '40vw',
  borderTopLeftRadius: '20vw',
  borderTopRightRadius: '20vw',
  backgroundColor: '#ee8'
}, 'arc':{
    width: '20vw',
    height: '10vw',
    borderTopLeftRadius: '13vw',
    borderTopRightRadius: '13vw',
    border: '3vw solid gray',
    borderBottom: '0px',
}
}

const textColor = 'thistle';
const quiltOutlineColor = 'white';
const fillOptions = ['goldenrod', 'rosybrown', 'olive', 'indianred'];

export const pageStyles = {
  columnLeft: {flex: '50%'},
  row: {display: 'flex'}
}


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
  background: 'goldenrod',
  color: '#333',
  fontWeight: 'bold',
  border: '1px solid #333',
  boxSizing: 'border-box',
  width: '8vw',
  height: '8vw',
}, 'triangle':{
  position: 'inherit',
  textAlign: 'center',
  fontWeight: 'bold',
	width: '0px',
	height: '0px',
	borderTop: '8vw solid goldenrod',
	borderRight: '8vw solid transparent',
  boxSizing: 'border-box'
}, 'circle': {
  position: 'inherit',
  textAlign: 'center',
  fontWeight: 'bold',
  height: '10vw',
  width: '10vw',
  backgroundColor: 'goldenrod',
  borderRadius:'50%'
}, 'semi-circle': {
  position: 'inherit',
  textAlign: 'center',
  fontWeight: 'bold',
  height: '6vw',
  width: '12vw',
  borderTopLeftRadius: '6vw',
  borderTopRightRadius: '6vw',
  backgroundColor: 'goldenrod'
}, 'arc':{
    width: '10vw',
    height: '5vw',
    borderTopLeftRadius: '7vw',
    borderTopRightRadius: '7vw',
    border: '2vw solid goldenrod',
    borderBottom: '0vw'
 } //'hexagon':{
//     position: 'inherit',
//     textAlign: 'center',
//     fontWeight: 'bold',
//     fontSize: '135px'
//     // width: 0,
//     // borderBottom: '30px solid #6C6',
//     // borderLeft:' 52px solid transparent',
//     // borderRight: '52px solid transparent',
//     // width: '104px',
//     // height: '60px',
//     // backgroundColor: '#6C6',
//     // width: 0,
//     // borderTop: '30px solid #6C6',
//     // borderLeft: '52px solid transparent',
//     // borderRight: '52px solid transparent'
//   }
}

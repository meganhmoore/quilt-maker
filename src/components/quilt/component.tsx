import React from 'react';

interface QuiltProps {
    size: string;
}

const quiltDims: {[type: string]: string} = {
    'pillowcase': 'border-2 w-60 h-60', 
    'crib': 'border-2 w-36 h-52', 
    'twin': 'border-2 w-40 h-72',
    'queen': 'border-2 w-3/5 h-3/5', 
    'king': 'border-2 w-4/5 h-4/5', 
    'custom': ''
}

const Quilt: React.FC<QuiltProps> = ({size}) => {
    const dims = quiltDims[size];
    //const style = `border-2 w-60 h-60`
    // TODO: scale size based on window size (pillow = halfwindowheightxhalfwindowheight)
    return(
        <div className={dims}></div>
    )
}

export default Quilt;
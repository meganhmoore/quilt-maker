import React from 'react';

interface QuiltProps {
    size: string;
}

const quiltDims: {[type: string]: string} = {
    'pillowcase': 'w-60 h-60', 
    'crib': 'w-60 h-90', 
    'queen': 'w-80 h-100', 
    'king': 'w-100 h-110', 
    'custom': ''
}

const Quilt: React.FC<QuiltProps> = ({size}) => {
    const dims = quiltDims[size];
    const style = `border-2 w-60 h-60`
    // TODO: scale size based on window size (pillow = halfwindowheightxhalfwindowheight)
    return(
        <div className={style}></div>
    )
}

export default Quilt;
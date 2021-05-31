import Link from 'next/link';
import React from 'react';
import ExampleCard from 'components/example-card';

const quilts = ['/hex-quilt.jpeg', '/baby-quilt-pink-and-black.jpeg', 
'IMG_5306.jpg', 'quarter-circles.jpg', 'square-quilt.jpeg', 'triangles-crib.jpeg'];

const Examples: React.FC = () => {
    // TODO: make an SVG icon
    const thumbnails = quilts.map((quilt) => <ExampleCard path={quilt} />);
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 masonry">
            {thumbnails}
        </div>
    );
}

export default Examples;
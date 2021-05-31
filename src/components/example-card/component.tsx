import React from 'react';

interface CardProps {
    path: string;
  }

const ExampleCard: React.FC<CardProps> = ({path}) => {
    return(
        <div className="flex justify-center">
            <button>
                <img src={path} className="object-fill" />
            </button>
        </div>
    );
}

export default ExampleCard;
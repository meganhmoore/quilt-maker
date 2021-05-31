// src/pages/index.tsx
import Header from 'components/header';

const IndexPage: React.FC = () => {
  return <div><Header />
    <img className="h-fill opacity-70" src={"/hex-quilt.jpeg"}/>
  
  </div>;
};

export default IndexPage;

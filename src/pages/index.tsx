// src/pages/index.tsx
import Header from 'components/header';

const IndexPage: React.FC = () => {
  return <div><Header />
    <img className="w-screen h-auto opacity-70" src={"/hex-quilt-title.jpeg"}/>
  
  </div>;
};

export default IndexPage;

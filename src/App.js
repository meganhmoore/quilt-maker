import logo from './logo.svg';
import './App.css';
import {styles} from './styles.js';
import {QuiltContainer} from './QuiltContainer.js';
import background from "./images/hex-quilt.jpeg";

const pStyle = {
  color: '#003738',
  fontSize: 72,
  height: '30vh'
}
const aStyle = {
  color: styles.textColor
}

const headerStyle ={
  backgroundImage: `url(${background})`,
  opacity: 0.6,
  minHeight: '10%'
}

const buttonStyle = {
  background: '#003738',
  fontSize: '20px',
  padding: '10px 20px',
  borderRadius: '1px',
  margin: '10px 2px',
  cursor: 'pointer',
  display: 'inline-block',
  color: 'white'
}


function App() {
  // TODO: add function to render example photo if button is clicked
  // TODO: add function to render quilt container is quilt button is clicked
  return (
    <div className="App">
      <header className="App-header" style={headerStyle}>
      <div>
        <button style={buttonStyle}>Examples</button>
        <button style={buttonStyle}>Design Your Quilt</button>
        <p style={pStyle}>
          Design your dream quilt.
        </p>
      </div>
      </header>
        <QuiltContainer />
        <a
          className="App-link"
          href="https://github.com/meganhmoore"
          target="_blank"
          rel="noopener noreferrer"
          style={aStyle}
        >
          My Github
        </a>
    </div>
  );
}

export default App;

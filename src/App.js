import logo from './logo.svg';
import './App.css';
import {styles} from './styles.js';
import {QuiltContainer} from './QuiltContainer.js';

const pStyle = {
  color: styles.textColor,
  fontSize: 72
}
const aStyle = {
  color: styles.textColor
}

const buttonStyle = {
  background: 'thistle',
  fontSize: '20px',
  padding: '10px 20px',
  borderRadius: '5px',
  margin: '10px 2px',
  cursor: 'pointer',
  display: 'inline-block'
}


function App() {
  // TODO: add function to render example photo if button is clicked
  // TODO: add function to render quilt container is quilt button is clicked
  return (
    <div className="App">
      <header className="App-header">
      <div>
        <button style={buttonStyle}>Examples</button>
        <button style={buttonStyle}>Design Your Quilt</button>
      </div>
        <p style={pStyle}>
          Design your dream quilt.
        </p>
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
      </header>
    </div>
  );
}

export default App;

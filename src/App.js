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


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p style={pStyle}>
          Make your dream quilt.
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

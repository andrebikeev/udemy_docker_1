import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  const makeapirequest = () => {
    console.log('makeapirequest')
    axios("/api/testwithcurrentuser").then(response => {
      console.log("response", response);
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          Hello from websockets!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <button onClick={makeapirequest}>Make api request</button>
    </div>
  );
}

export default App;

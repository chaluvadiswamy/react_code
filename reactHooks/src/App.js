import logo from './logo.svg';
import './App.css';
import Counter from './Component/Counter';
import TxtChange from './Component/TxtChange';
import Checkbox from './Component/Checkbox';

function App() {
  return (
    <div className="App">
      {/* <Counter/> */}
      {/* <TxtChange/> */}
      <Checkbox/>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;

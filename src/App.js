import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome Benjamin to my amazing website
        </p>
        <a
          className="App-link"
          href="https://www.benjamincastellan.pro"
          target="_blank"
          rel="noopener noreferrer"
        >
          For more information, see my personal website
        </a>
      </header>
    </div>
  );
}

export default App;

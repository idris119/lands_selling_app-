import logo from './logo.svg';
import './App.css';
import Houses from './components/Houses';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          Edit <code>src/App.js</code> and save to reload.
        <Houses/>
      </header>
    </div>
  );
}

export default App;

import ProjHeader from './components/ProjHeader.js';
import Shop from './components/Shop.js';
import './fonts.css'

function App() {
  const isLoggedin = true;

  return (
    <div>
      <ProjHeader isLoggedin={isLoggedin} />
      <Shop />
    </div>


    /**
    <div className="App">
      <header className="App-header">
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
      </header>
    </div>
     */
  );
}

export default App;

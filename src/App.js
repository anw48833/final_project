import Home from './components/Home.js';
import ProjHeader from './components/ProjHeader.js';
import Shop from './components/Shop.js';
import './fonts.css'

function App() {
  const isLoggedin = true;
  const DUMMY_ITEMS = [
    {
      id: 'i1',
      title: 'Dog Bone',
      image:
        'https://cdn.shopify.com/s/files/1/0302/2438/4137/products/Large_JPG-RMMonsterFemur_Single-8_f7efaa79-463e-4ec6-a416-33f5b2d54f95_5000x.jpg?v=1665678817',
      description: 'yadda yadda'
    },
    {
      id: 'i2',
      title: 'Woody',
      image:
        'https://lumiere-a.akamaihd.net/v1/images/open-uri20150422-20810-10n7ovy_9b42e613.jpeg?region=0,0,450,450',
      description: 'yadda yadda'
    },
    {
      id: 'i3',
      title: 'Belle',
      image:
        'https://i.insider.com/58caab3e7d1fb21a008b4574?width=700',
      description: 'yadda yadda'
    },
    {
      id: 'i4',
      title: 'Belle',
      image:
        'https://i.insider.com/58caab3e7d1fb21a008b4574?width=700',
      description: 'yadda yadda'
    },
   ]

  return (
    <div>
      <ProjHeader isLoggedin={isLoggedin} />
      <Home />
      <Shop item_list={DUMMY_ITEMS} />
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

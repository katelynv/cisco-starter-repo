//import logo from './logo.svg';
import './App.css';
import Banner from "./Banner";
import ExhibitComponent from "./ExhibitComponent";

function App() {
  return ( 
    <div className="app">
      <Banner/>
      <br></br>
      <div className="wrapper">
        <ExhibitComponent
          title="IP Address"
          description="The IP address of your computer is ________."
        />
        <ExhibitComponent 
          title="Latency Information"
          description="This is where the latency information for pylon will go."
        />
      </div>
      
    </div>

    /*
    <div className="App">
      <header className="App-header">
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

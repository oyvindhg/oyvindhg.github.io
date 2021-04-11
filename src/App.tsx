import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './HomePage';
import ReactGA from 'react-ga';
import { useLocation, } from 'react-router-dom';

const TRACKING_ID = "UA-194256372-1";

ReactGA.initialize(TRACKING_ID);

function App() {
  const location = useLocation();

  useEffect(() => {
    ReactGA.pageview(location.pathname + location.search);
  }, [location]);

  return (
    <HomePage />
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;

import { useEffect } from 'react';
import HomePage from './frontpage/HomePage';
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
  );
}

export default App;

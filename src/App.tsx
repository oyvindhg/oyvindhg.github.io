import { useEffect } from 'react';
import Frontpage from './frontpage/Frontpage';
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
    <Frontpage />
  );
}

export default App;

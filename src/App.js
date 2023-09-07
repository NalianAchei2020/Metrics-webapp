import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCountresData } from './redux/country/countrySlice';
import Home from './pages/home';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountresData());
  }, [dispatch]);

  return (
    <div className="App">
      <h1>METRICS WEBAPP</h1>
      <Home />
    </div>
  );
}

export default App;

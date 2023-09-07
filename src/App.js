import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { getCountresData } from './redux/country/countrySlice';
import Home from './pages/home';
import Header from './Components/header';
import Details from './pages/details';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountresData());
  }, [dispatch]);

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="//Metrics-webapp" element={<Home />} />
          <Route path="/countries/:name" element={<Details />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

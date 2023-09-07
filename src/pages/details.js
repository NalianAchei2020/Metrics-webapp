import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Details() {
  const { name } = useParams();
  const { countries } = useSelector((store) => store.countries);
  const rareName = countries.find((country) => country.name === name);
  return (
    <div>
      <div className="datail-container">
        <div className="im-containter">
          <h1 className="headin-text">
            {rareName && rareName.name ? rareName.name : 'none'}
          </h1>
          <img
            src={rareName && rareName.flag}
            alt={rareName && rareName.name}
            className="flags-img"
          />
        </div>
        <div className="status-bar">
          <h2 className="country-status">City/Town BreakDown - 2023</h2>
        </div>
        <h2 className="itemS-Info">
          <span>Name:</span>
          {rareName && rareName.name ? rareName.name : 'none'}
        </h2>
        <h2 className="itemS-Info">
          <span>Capital:</span>
          {rareName && rareName.capital ? rareName.capital : 'none'}
        </h2>
        <h2 className="itemS-Info">
          <span>Continent:</span>
          {rareName && rareName.continent ? rareName.continent : 'none'}
        </h2>
        <h2 className="itemS-Info">
          <span>Population:</span>
          {rareName && rareName.population ? rareName.population : 'none'}
        </h2>
        <h2 className="itemS-Info">
          <span>Area:</span>
          {rareName && rareName.area ? rareName.area : 'none'}
          km²
        </h2>
        <h2 className="itemS-Info">
          <a href={rareName && rareName.map ? rareName.map : 'none'}>Map</a>
        </h2>
      </div>
    </div>
  );
}

export default Details;

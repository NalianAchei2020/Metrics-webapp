import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Details() {
  const { name } = useParams();
  const { countries } = useSelector((store) => store.countries);
  const selectedCountry = countries.find((country) => country.name === name);

  return (
    <div>
      {selectedCountry ? (
        <div className="d-container">
          <div className="d2-container">
            <h1 className="text-container">{selectedCountry.name}</h1>
            <img
              src={selectedCountry.flag}
              alt={selectedCountry.name}
              className="country-flag"
            />
          </div>
          <div className="stats-container">
            <h2 className="stats">City/Town BreakDown - 2023</h2>
          </div>
          <h2 className="country-detail">
            <span>Name:</span>
            {selectedCountry.name}
          </h2>
          <h2 className="country-detail">
            <span>Capital:</span>
            {selectedCountry.capital}
          </h2>
          <h2 className="country-detail">
            <span>Continent:</span>
            {selectedCountry.continent}
          </h2>
          <h2 className="country-detail">
            <span>Population:</span>
            {selectedCountry.population}
          </h2>
          <h2 className="country-detail">
            <span>Area:</span>
            {selectedCountry.area}
            {' '}
            km²
          </h2>
          <h2 className="country-detail">
            <a href={selectedCountry.map}>Map</a>
          </h2>
        </div>
      ) : null}
    </div>
  );
}

export default Details;

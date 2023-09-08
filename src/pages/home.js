import { useSelector } from 'react-redux';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsArrowRightCircle } from 'react-icons/bs';
import '../Components/style.css';

function Home() {
  const data = useSelector((state) => state.countries);
  const { countries } = useSelector((store) => store.countries);
  const [searchCountry, setSearchCountry] = useState('');

  const filterCountries = countries.filter((item) => {
    const itemName = item.name.toLowerCase();
    const searchInCountry = searchCountry.toLowerCase();
    return itemName.includes(searchInCountry);
  });
  const handleSearchCountry = (event) => {
    setSearchCountry(event.target.value);
  };
  return (
    <section>
      {data.loading && <p>loading....</p>}
      {data.error && <p>{data.error}</p>}
      {countries.length > 0 ? (
        <div>
          <div className="S-container">
            <img
              src="Images/ban-img.jpg"
              alt="Map"
              className="backgroung-photo"
            />
          </div>
          <input
            type="text"
            value={searchCountry}
            onChange={handleSearchCountry}
            placeholder="&#x1F50D; Search Country Here"
            className="textbox"
          />
          <div className="stats-container">
            <h3 className="stats">Stats by Country</h3>
          </div>
          <div className="countries-container">
            { filterCountries.map((country, index) => (
              <Link
                to={`/countries/${country.name}`}
                key={country.name}
                className={`container2 ${
                  index === 1
                  || index === 2
                  || index === 5
                  || index === 6
                  || index === 9
                  || index === 10
                    ? 'container3'
                    : ''
                }`}
              >
                <BsArrowRightCircle className="arrow" />
                <img
                  src="Images/background-img.png"
                  alt={country.name}
                  className="cMap"
                />
                <div className="info">
                  <h2 className="cname">{country.name}</h2>
                  <h2 className="cpop">{country.population}</h2>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </section>
  );
}

export default Home;

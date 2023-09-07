import { useSelector } from 'react-redux';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Components/style.css';

function Home() {
  const data = useSelector((state) => state.countries);
  const { countries } = useSelector((store) => store.countries);
  const [searchinCountry, setSearchCountry] = useState('');

  const handleMyCountry = (event) => {
    setSearchCountry(event.target.value);
  };

  const filterData = countries.filter((item) =>
    item.name.toLowerCase().includes(searchinCountry.toLowerCase())
  );
  return (
    <section>
      {data.loading && <p>loading....</p>}
      {data.error && <p>{data.error}</p>}
      {countries.length > 0 ? (
        <div>
          <div className="search-cont">
            <img
              src="Images/ban-img.jpg"
              alt="World Map"
              className="world-img"
            />
          </div>
          <input
            type="text"
            value={searchinCountry}
            onChange={handleMyCountry}
            placeholder="&#x1F50D; Search Country Here"
            className="search-input"
          />
          <div className="status-bar">
            <h2 className="country-status">Stats by Country</h2>
          </div>
          <div className="container">
            {filterData.map((item, index) => (
              <Link
                to={`/countries/${item.name}`}
                key={item.name}
                className={`small-container ${
                  index === 1 ||
                  index === 2 ||
                  index === 5 ||
                  index === 6 ||
                  index === 9 ||
                  index === 10
                    ? 'active'
                    : ''
                }`}
              >
                <img
                  src="Images/background-img.png"
                  alt={item.name}
                  className="country-map"
                />
                <div className="country-info">
                  <h2 className="country-name">{item.name}</h2>
                  <h2 className="country-population">{item.population}</h2>
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

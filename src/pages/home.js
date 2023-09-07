import { useSelector } from 'react-redux/es/hooks/useSelector';
import Link from 'react-router-dom';

function Home() {
  const data = useSelector((state) => state.countries);
  const { countries } = useSelector((store) => store.countries);
  return (
    <section>
      {data.loading && <p>loading....</p>}
      {data.error && <p>{data.error}</p>}
      {countries.length > 0
        ? countries.map((country) => (
            <div key={country.id}>
              <ul>
                <li>{country.name}</li>
              </ul>
            </div>
          ))
        : null}
    </section>
  );
}

export default Home;

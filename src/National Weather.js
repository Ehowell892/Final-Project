import { useEffect, useState } from 'react';
import "./National Weather.css";

function NationalWeather() {
  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState('');
  const [zipCodes, setZipCodes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [debounceTimeout, setDebounceTimeout] = useState(null);

  const apiURL = 'https://6707298ca0e04071d229422e.mockapi.io/city-list';
  useEffect(() => {
    const getWeatherData = async () => {
      try {
        const response = await fetch(apiURL);
        setWeatherData(await response.json());
      }
      catch (error) {
        console.log("ERROR: " + error);
      }
      finally {
      }
    };
    getWeatherData();
  }, [apiURL]);

  const fetchZipCodes = async (location) => {
    const simpleLocation = location.trim();
    const [city, state] = location.split(',').map(item => item.trim());


    if (city && state) {
      setLoading(true);
      setError('');
      try {
        console.log(city + "-" + state);
        // Using Zippopotam.us API
        const response = await fetch(`https://api.zippopotam.us/us/${state.toLowerCase()}/${city.toLowerCase()}`);
        const data = await response.json();
        console.log(response);
        if (data.places) {
          const zipCodesList = data.places.map((place) => place['post code']);
          console.log(zipCodesList);
          setZipCodes(zipCodesList);
        } else {
          setZipCodes([]);
        }
      } catch (err) {
        setError('No ZIP codes found or invalid input');
        setZipCodes([]);
      } finally {
        setLoading(false);
      }
    }
    else {
      if (simpleLocation.length === 5) {
        setLoading(true);
        setZipCodes([simpleLocation]);
        setLoading(false);
      }
    }
  };

  const onTempClick = () => {
    window.location.href= '/temphistory';
  }
  const handleChange = (event) => {
    const value = event.target.value;
    console.log(value);

    setLocation(value);
    if (debounceTimeout) {
      clearTimeout(debounceTimeout);  // Clear the previous timeout if user types again
    }

    const newTimeout = setTimeout(() => {
      fetchZipCodes(value);
    }, 1000);

    setDebounceTimeout(newTimeout);
  }

  if (!weatherData) return <p>Loading Data..</p>;
  return (
    <div className="NationalWeatherDiv">
      <div>
        <label>
          Enter City, State:&nbsp;  
          <input className='bar'
            type="text"
            style={{ width: 200 }}
            value={location}
            onChange={handleChange}
            placeholder="e.g., Phoenix, AZ or Zipcode"
          />
        </label>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {zipCodes.length > 0 && (
          <>
            <div className="mt-10">
              <span className="text-4xl">Pick a zipcode below to display the weather:</span>
              <div className="m-10">
                <div className="grid grid-cols-10">
                  {zipCodes.map((zip, index) => (
                    <div class="zipCode" key={index}><a href={"/zipcode/" + zip}>{zip}</a></div>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      <div>
        <button onClick={onTempClick}>Temperature History</button>

      </div>
    </div >
  );
}
export default NationalWeather;
import { useEffect, useState } from 'react';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';
//import azData from "./Assets/Map/arizona-zip-codes.geojson";
import azData from "./Assets/Map/az_arizona_zip_codes_geo.min.json";

function NationalWeather() {
  const [weatherData, setWeatherData] = useState(null);

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
  if (!weatherData) return <p>Loading Data..</p>;
  return (
    <div className="grid grid-cols-2 place-items-center NationalWeatherDiv">
      {weatherData.map(item => (
        <div class='city' id={item.id}>
          <a href={"/zipcode/" + item.Zipcode}>{item.City}</a>
        </div>
      ))}
      <div>
        <ComposableMap width={200} height={200} projectionConfig={{ scale: 200 }} zoom={1}>
          <Geographies geography={azData}>{({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                style={{
                  default: { fill: "#D6D6DA", outline: "none" },
                  hover: { fill: "#F53", outline: "none" },
                  pressed: { fill: "#E42", outline: "none" },
                }}
              />
            ))
          }</Geographies>
        </ComposableMap>
      </div>
    </div >
  );
}
export default NationalWeather;
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import "./Current Weather.css";
import "./Weather Icons.js";
import WeatherIcons from "./Weather Icons.js";
import "./Temperature.js";
import Temperature from "./Temperature.js";
import "./FeelsLike.js";
import FeelsLike from "./FeelsLike.js";
import Day from "./Day.js";
import Humidity from "./Humidity";
import ChanceOfRain from "./ChanceOfRain.js";
import WindSpeed from "./WindSpeed.js";
function CurrentWeather() {
        const { zipcode } = useParams();
        const [added, setAdded] = useState(false);
        const [weatherData, setWeatherData] = useState(null);
        const [newTemp, setNewTemp] = useState({ zipcode: "", temp: "" });
        const currentDate = new Date();
        const apiURL = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/' + zipcode + '?unitGroup=us&key=XYWVVUWC8UNLW3JH6DUJZ63DW&contentType=json&options=usermote';
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
        const addTempHistory = () => {
                if (added === false) {
                        setAdded(true);
                        console.log("ADDED");
                        const tempData = {
                                temp: weatherData.currentConditions.temp,
                                zipcode: parseInt(zipcode)
                        };
                        fetch("http://localhost:3001/temps", {
                                method: "POST", headers: { "Content-Type": "application/json" },
                                body: JSON.stringify(tempData)
                        })
                }
        }
        if (!weatherData) return <p>Loading weather data for {zipcode}</p>;
        return (
                <div>
                        <div className="text-3xl font-bold">Current weather for {zipcode}</div>
                        <div className="grid grid-cols-1 gap-2 place-items-center">
                                <div className="currentTemp"><Temperature temps={weatherData.currentConditions.temp} /></div>
                                <div className="icon"><WeatherIcons iconName={weatherData.currentConditions.icon} /></div>
                                <div className="conditions">{weatherData.description}</div>
                                <div className="feelslike"><FeelsLike temps={weatherData.currentConditions.feelslike} /></div>
                        </div>

                        <div className="humidity"><Humidity temps={weatherData.currentConditions.humidity} /></div>
                        <div className="chanceofrain"><ChanceOfRain temps={weatherData.currentConditions.precipprob} /></div>
                        <div className="windspeed"><WindSpeed windspeed={weatherData.currentConditions.windspeed} /></div>
                        <span className="text-4xl">Future Forecast</span>
                        <div className="grid grid-cols-7 gap-2">
                                {weatherData.days.slice(1, 8).map(currentday => (
                                        <Day day={currentday} />
                                ))}
                        </div>
                        {addTempHistory()}
                </div>
        );
}

export default CurrentWeather;

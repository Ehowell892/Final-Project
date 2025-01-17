import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

const weatherIcons = {
        'clear-day': require('./Assets/Icons/clear-day.svg'),
        'clear-night': require('./Assets/Icons/clear-night.svg'),
        'cloudy': require('./Assets/Icons/cloudy.svg'),
        'fog': require('./Assets/Icons/fog.svg'),
        'hail': require('./Assets/Icons/hail.svg'),
        'partly-cloudy-day': require('./Assets/Icons/partly-cloudy-day.svg'),
        'partly-cloudy-night': require('./Assets/Icons/partly-cloudy-night.svg'),
        'rain': require('./Assets/Icons/rain.svg'),
        'rain-snow': require('./Assets/Icons/rain-snow.svg'),
        'rain-snow-showers-day': require('./Assets/Icons/rain-snow-showers-day.svg'),
        'rain-snow-showers-night': require('./Assets/Icons/rain-snow-showers-night.svg'),
        'showers-day': require('./Assets/Icons/showers-day.svg'),
        'showers-night': require('./Assets/Icons/showers-night.svg'),
        'sleet': require('./Assets/Icons/sleet.svg'),
        'snow': require('./Assets/Icons/snow.svg'),
        'snow-showers-day': require('./Assets/Icons/snow-showers-day.svg'),
        'snow-showers-night': require('./Assets/Icons/snow-showers-night.svg'),
        'thunder': require('./Assets/Icons/thunder.svg'),
        'thunder-rain': require('./Assets/Icons/thunder-rain.svg'),
        'thunder-showers-day': require('./Assets/Icons/thunder-showers-day.svg'),
        'thunder-showers-night': require('./Assets/Icons/thunder-showers-night.svg'),
        'wind': require('./Assets/Icons/wind.svg').default
};

function WeatherIcons({ iconName }) {

        function getWeatherIcon() {
                try {
                        return (weatherIcons[iconName].default);
                } catch (error) {
                        return (weatherIcons['clear-day'].default);
                }
        }


        return (
                <img src={getWeatherIcon()} width="72" height="72" title={iconName} />
        );
}

export default WeatherIcons;

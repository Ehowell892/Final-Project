import "./Day.css";
import "./Temperature";
import Temperature from "./Temperature";
import "./Weather Icons";
import WeatherIcons from "./Weather Icons";
import MoonPhases from "./MoonPhases";

function Day({ day }) {
    const daysofweek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const date = new Date(day.datetime + "T00:00:00Z");
    const dow = daysofweek[date.getUTCDay()];
    return (
        <div className="day grid grid-cols-1 place-items-center">
            <div><b>{dow}</b></div>
            <div>H: <Temperature temps={day.tempmax} /></div>
            <div>L: <Temperature temps={day.tempmin} /></div>
            <div><WeatherIcons iconName={day.icon} /></div>
            <div><MoonPhases iconName={day.moonphase} /></div>
        </div>
    );
}
export default Day;
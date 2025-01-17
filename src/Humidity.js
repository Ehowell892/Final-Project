import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import "./Humidity.css";




function Humidity({temps}) {



        
        return (
                <span className="humidity">Humidity: {Math.floor(temps)}&#37;</span>
        );
}

export default Humidity;
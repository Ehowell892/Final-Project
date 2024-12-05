import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import "./WindSpeed.css";




function WindSpeed({windspeed}) {



        
        return (
                <span className="windspeed">Wind Speed: {Math.floor(windspeed)} mph </span>
        );
}

export default WindSpeed;
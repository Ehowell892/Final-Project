import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import "./ChanceOfRain.css";




function ChanceOfRain({temps}) {



        
        return (
                <span className="chanceofrain">Precipitation Probability: {Math.floor(temps)}&#37;</span>
        );
}

export default ChanceOfRain;
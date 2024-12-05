import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import "./FeelsLike.css";



function FeelsLike({temps}) {



        
        return (
                <span className="feelslike">Feels Like: {Math.floor(temps)}&deg;</span>
        );
}

export default FeelsLike;
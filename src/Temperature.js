import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import "./Temperature.css";



function Temperature({temps}) {



        
        return (
                <span className="temps">{Math.floor(temps)}&deg;</span>
        );
}

export default Temperature;
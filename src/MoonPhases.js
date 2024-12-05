import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

const MoonPhasesIcons = {
        0: require('./Assets/MoonPhases/Moon_phase_0.svg'),
        1: require('./Assets/MoonPhases/Moon_phase_1.svg'),
        2: require('./Assets/MoonPhases/Moon_phase_2.svg'),
        3: require('./Assets/MoonPhases/Moon_phase_3.svg'),
        4: require('./Assets/MoonPhases/Moon_phase_4.svg'),
        5: require('./Assets/MoonPhases/Moon_phase_5.svg'),
        6: require('./Assets/MoonPhases/Moon_phase_6.svg'),
        7: require('./Assets/MoonPhases/Moon_phase_7.svg'),
};

function MoonPhases({iconName}) {

        function getMoonPhaseIcon() {
                try {
                        return (MoonPhasesIcons[Math.round(parseFloat (iconName) * 7)].default);
                } catch (error) {
                        return (MoonPhasesIcons[0].default);
                }
        }

        
        return (
                <img src={getMoonPhaseIcon()} width="45" height="45" />
        );
}

export default MoonPhases;
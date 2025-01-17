import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NationalWeather from './National Weather';
import CurrentWeather from './Current Weather';
import { useEffect, useState } from 'react';
import TempHistory from './TempHistory';
function App() {
  return(
    <div className='App'>
<Router>
        <Routes>
          <Route path="/" element={<NationalWeather />} />
          <Route path="/zipcode/:zipcode" element={<CurrentWeather />} />
          <Route path="/temphistory" element={<TempHistory />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

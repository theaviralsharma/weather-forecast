import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
import './WeatherApp.css';

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({});

  let updateInfo = (info) => {
    setWeatherInfo(info);
  };

  return (
    <div className="WeatherApp">
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
      </div>
  );
}
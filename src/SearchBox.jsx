import "./SearchBox.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";

  let getWeatherInfo = async () => {
    try {
      let response = await fetch(
        `${API_URL}?q=${city}&appid=${import.meta.env.VITE_API_KEYS}&units=metric`
      );
      let jsonResponse = await response.json();
      console.log(jsonResponse);
      if (jsonResponse.cod === 200) {
        let result = {
          city: city,
          temp: jsonResponse.main.temp,
          temp_min: jsonResponse.main.temp_min,
          temp_max: jsonResponse.main.temp_max,
          humidity: jsonResponse.main.humidity,
          feels_like: jsonResponse.main.feels_like,
          wind: jsonResponse.wind.speed,
          description: jsonResponse.weather[0].description,
        };
        console.log(result);
        return result;
      } else {
        throw new Error(jsonResponse.message);
      }
    } catch (err) {
      throw err;
    }
  };

  let handleChange = (event) => {
    setCity(event.target.value);
    setError(false); // Reset error when user types in the input field
  };

  let handleSubmit = async (event) => {
    try {
      event.preventDefault();
      console.log(city);
      let info = await getWeatherInfo();
      updateInfo(info);
      setCity("");
      setError(false); // Reset error after successful search
    } catch (err) {
      setError(true); // Set error to true if the place is not found
    }
  };

  return (
    <div className="SearchBox">
      <h3>
        Check the Weather? <i className="fa-solid fa-cloud-moon"></i>
      </h3>
      <form action="" onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="standard"
          required
          value={city}
          onChange={handleChange}
          size="small"
        />
        <br />
        <br />
        <Button variant="contained" type="submit" size="large" style={{borderRadius:"15px"}}>
          <i className="fa-solid fa-magnifying-glass"></i>&nbsp;Search
        </Button>
        {error && (
          <p style={{ color: "red" }}>No Such Place Found!!! Please try again.</p>
        )}
      </form>
    </div>
  );
}
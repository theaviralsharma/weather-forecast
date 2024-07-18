// import './App.css'
import WeatherApp from "./WeatherApp";

function App() {
  return (
    <>
      <h1
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          // backgroundColor: "#1565c0",
          color: "white",
          borderRadius: "20px",
        }}
      >
        Weather App
      </h1>
      <WeatherApp />
    </>
  );
}

export default App;

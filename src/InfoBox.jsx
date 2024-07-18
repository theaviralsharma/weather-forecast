import "./InfoBox.css";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function InfoBox({ info }) {
  const init_URL =
    "https://images.unsplash.com/photo-1601134467661-3d775b999c8b?q=80&w=2875&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const COLD_URL =
    "https://images.unsplash.com/photo-1457269449834-928af64c684d?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const HOT_URL =
    "https://images.unsplash.com/photo-1458093257227-0f30303eb1f0?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const RAIN_URL =
    "https://images.unsplash.com/photo-1519692933481-e162a57d6721?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div className="InfoBox">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="Weather Image"
          height="140"
          image={
            info.humidity > 80
              ? RAIN_URL
              : info.temp > 25
              ? HOT_URL
              : info.temp < 22
              ? COLD_URL
              : init_URL
          }
        />
        <Typography gutterBottom variant="h5" component="div">
          <h3>
            <u>{info.city}</u>&nbsp;&nbsp;&nbsp;
            {info.humidity > 80 ? (
            <i
              style={{ color: "#0072ff" }}
              className="fa-solid fa-cloud-rain"
            ></i>
          ) : info.temp > 25 ? (
            <i style={{ color: "orange" }} className="fa-solid fa-sun"></i>
          ) : info.temp < 22 ? (
            <i
              style={{ color: "#0072ff" }}
              className="fa-regular fa-snowflake"
            ></i>
          ) : (
            <i
              style={{ color: "black" }}
              className="fa-solid fa-temperature-high"
            ></i>
          )}
          </h3>
        </Typography>

        <CardContent>
          <Typography variant="body2" color="text.secondary">
            <div className="extra-info">
              <div style={{ display: "flex", alignItems: "center" }}>
                Temperature: <b>{info.temp}&deg;C</b>
              </div>
              <div>
                Min Temp: <b>{info.temp_min}&deg;C</b>
                <br />
                Max Temp: <b>{info.temp_max}&deg;C</b>
              </div>
            </div>
            <hr />
            <div className="extra-info">
              <div>
                Humidity: <b> {info.humidity}%</b>
              </div>
              <div>
                Wind: <b>{info.wind} km/h</b>
              </div>
            </div>
            <hr />
            <div>
              The weather can be described as <b>{info.description}</b> and
              feels Like <b>{info.feels_like}&deg;C</b>
            </div>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

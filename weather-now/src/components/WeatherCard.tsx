import type{ WeatherData } from "../services/weatherService";


interface WeatherCardProps {
  city: string;
  weather: WeatherData;
  description: string;
  
}

export default function WeatherCard({ city, weather, description }: WeatherCardProps) {
  return (
   <div className="weather-card">
  <h2>{city}</h2>
  <p>{description}</p>
  <p className="temperature">{weather.temperature}°C</p>
  <div className="details">
    <span>💨 {weather.windspeed} km/h</span>
    <span>🕒 {new Date(weather.time).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
  </div>
</div>
  );
}

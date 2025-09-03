import { useState } from "react";
import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WeatherCard";
import ErrorMessage from "../components/ErrorMessage";
import { fetchWeather } from "../services/weatherService";
import type { WeatherData } from "../services/weatherService";



export default function Home() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [city, setCity] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  const handleSearch = async (city: string) => {
    try {
      setError("");
      const data = await fetchWeather(city);
      setWeather(data.weather);
      setCity(data.city);
      setDescription(data.description);
    } catch (err) {
      setWeather(null);
      setError((err as Error).message);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6">🌤️ Weather Now</h1>
      <SearchBar onSearch={handleSearch} />
      {error && <ErrorMessage message={error} />}
      {weather && <WeatherCard city={city} weather={weather} description={description} />}
    </div>
  );
}

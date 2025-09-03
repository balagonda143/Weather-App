export interface WeatherData {
  temperature: number;
  windspeed: number;
  weathercode: number;
  time: string;
}

const WEATHER_CODES: Record<number, string> = {
  0: "☀️ Clear sky",
  1: "🌤️ Mainly clear",
  2: "⛅ Partly cloudy",
  3: "☁️ Overcast",
  45: "🌫️ Fog",
  48: "🌫️ Depositing rime fog",
  51: "🌦️ Light drizzle",
  61: "🌧️ Rain",
  71: "🌨️ Snow",
  95: "⛈️ Thunderstorm",
};

export async function fetchWeather(city: string): Promise<{city: string, weather: WeatherData, description: string}> {
  // Step 1: Get lat/long from Open-Meteo geocoding API
  const geoRes = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}`);
  const geoData = await geoRes.json();
  
  if (!geoData.results || geoData.results.length === 0) {
    throw new Error("City not found");
  }

  const { latitude, longitude, name } = geoData.results[0];
  

  // Step 2: Fetch weather data
  const weatherRes = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&timezone=auto`);
  const weatherData = await weatherRes.json();

  const weather = weatherData.current_weather as WeatherData;
  return {
    city: name,
    weather,
    description: WEATHER_CODES[weather.weathercode] || "🌍 Unknown",
  };
}

# Weather-App

Here’s how to install and run your Weather Now project step-by-step, using React and plain CSS:

🚀 Project Installation Guide (React + Vite + Plain CSS)

🧱 Step 1: Install Node.js (if not already)

Download and install Node.js from: https://nodejs.org/

You can check if it’s installed:

bash node -v npm -v

🛠️ Step 2: Create the React Project with Vite

Open your terminal (Command Prompt / VS Code Terminal / Bash) and run:

bash npm create vite@latest weather-now -- --template react-ts

cd weather-now

npm install

This sets up a fast, modern React + TypeScript project.

📁 Step 3: Organize the Project Structure

Inside the weather-now folder, structure your files like this:

weather-now/ ├── src/ │ ├── components/ │ │ ├── SearchBar.tsx │ │ ├── WeatherCard.tsx │ │ └── ErrorMessage.tsx │ ├── pages/ │ │ └── Home.tsx │ ├── services/ │ │ └── weatherService.ts │ ├── App.tsx │ ├── main.tsx │ └── index.css ← put your custom CSS here ├── index.html ├── package.json ├── tsconfig.json

💡 Step 4: Add Plain CSS

Replace the contents of src/index.css with the styles I shared earlier.

🎨 Step 5: Add the Components

Create the 3 components and Home page using the code provided above.

🧪 Step 6: Run the App

bash npm run dev

Your app will be available at:

http://localhost:5176/

🚢 Step 7 (Optional): Build for Production

bash npm run build

This creates a dist/ folder for deployment.

🌤 Weather Now Expalnation

A simple, clean, and responsive weather app built with React and plain CSS. Users can search for any city and view the current temperature, wind speed, and weather description using the Open-Meteo API.

🔗 Live Demo

👉 [Add your deployed URL here, e.g. CodeSandbox/Netlify]

🚀 Features

🔍 Search weather by city name

🌡 Current temperature and conditions

💨 Wind speed

🕒 Current local time

❌ Graceful error handling for invalid cities

📱 Fully responsive and mobile-friendly UI

🎨 Clean and accessible UX using plain CSS

🛠 Tech Stack

React (with TypeScript)

Plain CSS (no external libraries/frameworks)

Open-Meteo API (no key required)

Geocoding API by Open-Meteo

✍ Notes

The app uses the Open-Meteo Geocoding API to convert city names into coordinates.

The weather code (0–99) is mapped to icons/descriptions for better UX.

The UI is styled with pure CSS (no Bootstrap or Tailwind), for full customization and performance.

🧑‍💻 Author

Created by [Balagonda_Mahesh] as part of the UI Take-Home Challenge. Feel free to fork or contribute!

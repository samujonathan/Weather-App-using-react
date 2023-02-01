import Search from "./Search";
import { useState, useEffect } from 'react';
import Result from "./Result";

const Home = (props) => {
    const [weatherData, setWeatherData] = useState({});
    const [city, setCity] = useState('Chennai');

    const handleSubmit = (e) => {
        e.preventDefault();
        const fetchWeatherData = async () => {
            const response = await fetch(
              `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=518e09f92d88af068342a9262a63f470`
            );
            const data = await response.json();
            setWeatherData(data);
          };
          fetchWeatherData();
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>Enter the city </label>
                <input
                type="text"
                placeholder="Enter city name"
                value={city}
                onChange={(e) => setCity(e)}
                />
                <button type="submit"/>
            </form>
            <Result city={city} weatherData={weatherData}/>
        </>
    )
};


export default Home;

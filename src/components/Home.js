import Search from "./Search";
import { useState, useEffect } from 'react';
import Result from "./Result";

const Home = (props) => {
    const [weatherData, setWeatherData] = useState({});
    const [city, setCity] = useState('Chennai');
    const handleChange = (e) => {
        setCity(e.target.value);
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
            <Search handleChange={handleChange} city={city}/>
            <Result weatherData={weatherData} city={city}/>
        </>
    )
};

export default Home;

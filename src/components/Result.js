const Result = (props) => {
    const weatherData = props.weatherData;
    return (
        <>
        <h2>Weather in {props.city}:</h2>
        <p>Temperature: {weatherData.main && weatherData.main.temp}°C</p>
        <p>Humidity: {weatherData.main && weatherData.main.humidity}%</p>
        <p>Weather: {weatherData.weather && weatherData.weather[0].description}</p>
        </>
    )
};


export default Result;
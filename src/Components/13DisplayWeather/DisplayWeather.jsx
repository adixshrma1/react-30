import React, { useEffect, useState } from "react";

export const DisplayWeather = () => {
  const [weather, setWeather] = useState(null);

  const [error, setError] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          const apiKey = "e0a191f85e57ca9cfb2d9e288938c487";
          const url =
            "https://api.openweathermap.org/data/2.5/weather?lat=" +
            latitude +
            "&lon=" +
            longitude +
            "&appid=" +
            apiKey +
            "&units=metric";
          fetch(url)
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              setWeather(data);
            });
        },
        (error) => {
          setError("Error code" + error.code + "-" + error.message);
        }
      );
    } else {
      setError("Geolocation is not supported by browser.");
    }
  }, []);

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      <h1 className="font-bold">
        Task: Display the weather based on the user's location
      </h1>
      {weather ? (
        <div>
          <p>Temperature is: {weather.main.temp} °C</p>
          <p>Humidity is: {weather.main.humidity} %</p>
          <p>Condition is: {weather.weather[0].main} </p>
          <p>Location is: {weather.name}</p> <br />
        </div> 
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

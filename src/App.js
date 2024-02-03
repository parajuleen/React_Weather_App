import React, { useState, useEffect } from "react";
import Input from "./Components/Input";
import Info from "./Components/Info";
import "./App.css";
import { createContext, useRef } from "react";
import Error from "./Components/Error";
let apiKey = "ffa46b061cfbe9844a6a6beeaa57b348";
export const Apicontext = createContext();

const App = () => {
  const [input, setInput] = useState("");
  const [weather, setWeather] = useState({});

  const isWeatherAvailable =
    Object.keys(weather).length !== 0 && weather.constructor === Object;
  const [error, setError] = useState(0);

  const inputRef = useRef();
  

  

  const fetchDefault = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}&units=metric`
    )
      .then((response) => response.json())
      .then((initialData) => {
        setWeather(initialData);
      })
      .catch((error) => {
        console.error("Error fetching default weather data:", error.message);
      });
  };

  useEffect(() => {
    fetchDefault();
  }, []);

  const fetchApi = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${apiKey}&units=metric`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.main) {
          setWeather(data);
          inputRef.current.value = "";

        }
        else {
          setError(1);
        }
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error.message);
      });
  };

  return (
    <>
      <Apicontext.Provider
        value={{
          input,
          setInput,
          fetchApi,
          weather,
          isWeatherAvailable,
          inputRef,
          setError
        }}
      >
        <div className="maincontainer bg-secondary mt-3">
          <Input />
          {error ?<Error/>:<Info />}
          

        </div>
      </Apicontext.Provider>
    </>
  );
};

export default App;

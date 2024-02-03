import React, { useContext } from "react";
import { IoIosSunny } from "react-icons/io";
import { Apicontext } from "../App";
import { WiHumidity } from "react-icons/wi";
import { TiWeatherWindy } from "react-icons/ti";
import Message from "./Message";



const Info = () => {
  const { weather,isWeatherAvailable } = useContext(Apicontext);

  return (
    <>

    
    { isWeatherAvailable ?<>
        <div className="info-container">
        <div className="row  ">
          <div className="col d-flex justify-content-center flex-column align-items-center">
              <div className="iconcontainer">
                <IoIosSunny className="icon" />
              </div>
            

            
              <div className="weather-temp">
                {Math.floor(weather.main.temp)}°C
              </div>
            

            <div className="weather-city d-flex flex-wrap">{weather.name},<span>{weather.sys.country}</span>
            </div>
          </div>

          <div className="row">
            <div className="col d-flex justify-content-between">


              <div className="humidity d-flex flex-column align-items-center">
                <WiHumidity className="icon" />
                <span className="fs-2 text-white">{weather.main.humidity}%</span>
              </div>
              <div className=" windspeed d-flex flex-column align-items-center">
                <TiWeatherWindy className="icon" />
                <span className="fs-2 text-white">{weather.wind.speed}m/sec</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>:<Message/>}
      
    </>
  );
};

export default Info;

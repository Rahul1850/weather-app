import React from 'react'
import {UseWeatherAppContext} from "../../Context/Context"
import dayjs from 'dayjs'

export default function Left() {
    const WEEKDAYS=[
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      const {state:{city,current}}=UseWeatherAppContext();

      if(!current) return ""
      const weekdayIndex=dayjs.unix(current.dt).day();
  return (
    <>
    <div className="leftWrap">
        <div className="dateWrap">
            <h2>{WEEKDAYS[weekdayIndex]}</h2>
            <span className="dateDay">
    	            {dayjs.unix(current.dt).format("DD MMM YYYY")}
            </span>
            <span className="locationName">
                {city.city} - {city.admin_name} -{city.country}
            </span>
        </div>
        <div className="weatherContainer">
            <img alt="img" className="weatherIcon" src={`http://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`}/>
            <h1 className="weatherTemp">{Math.round(current.temp.max-273.15)} <sup>o</sup>C</h1>
            <h3 className="weatherDesc">{current.weather[0].main}</h3>
        </div>

    </div>
      
    </>
  )
}

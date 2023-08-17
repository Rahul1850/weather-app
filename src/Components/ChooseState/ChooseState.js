import React, { useEffect } from 'react'
import cities from "../../Data/in.json"
import {UseWeatherAppContext} from "../../Context/Context"
import axios from 'axios';

export default function ChooseState() {
  const {state:{city},dispatch}=UseWeatherAppContext();

  const handleChange=(e)=>{

    const selectedCity=cities.filter((c)=>{
      let name=`${c.city} - ${c.admin_name}`
      return name === e.target.value 
    })
  
   dispatch({
    type: "SET_CITY",
    payload: selectedCity[0]
   });

  }

  

  //API CALL

  const APIKEY="1a7b645bbea96f580cde3d6c9f61d044";
  let lat=city && city.lat ? city.lat :""
  let lng=city && city.lng ? city.lng :"" 
  let exclude="hourly,minutely";
  const url=`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&exclude=${exclude}&appid=${APIKEY}`

  const fetchData=()=>{
    axios(url)
    .then((response)=>{
     
      let _daily=response.data.daily;
      dispatch({
        type:"SET_DAILY",
        payload:_daily
      })
    } )
  }

  useEffect(()=>{
    fetchData()

  },[lat,lng])
  return (
    <>
    <div className="stateWrap">
        <select className="stateMenu" defaultValue={city} onChange={handleChange}>
          {cities.length>0 && cities.map((city)=>{
            return <option key={city.city}>{city.city} - {city.admin_name}</option>
          })
            
          }
        </select>
    </div>
    
    </>
  )
}

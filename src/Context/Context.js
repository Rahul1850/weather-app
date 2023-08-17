import React, { createContext, useContext, useReducer } from 'react';
import { Reducer } from './Reducer';

const WeatherAPPContext = createContext();
const initial={city: {
  "city": "Delhi", 
  "lat": "28.6100", 
  "lng": "77.2300", 
  "country": "India", 
  "iso2": "IN", 
  "admin_name": "Delhi", 
  "capital": "admin", 
  "population": "32226000", 
  "population_proper": "16753235"
},
current: '',
daily: []}
const WeatherAPPProvider = ({ children }) => {
  

  const [state, dispatch] = useReducer(Reducer,initial);
//   console.log({state},{dispatch})
  return (
    <WeatherAPPContext.Provider value={{ state, dispatch }}>
      {children}
    </WeatherAPPContext.Provider>
  );
};
export default WeatherAPPProvider;
export const UseWeatherAppContext=()=>{
    return useContext(WeatherAPPContext);
}
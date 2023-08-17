import React, { useEffect, useState } from 'react'
import {UseWeatherAppContext} from "../../Context/Context"
import SingleCard from '../SingleCard/SingleCard';
export default function WeekInfoCard() {
    const{state:{daily},dispatch}=UseWeatherAppContext();
    const [selectedCard,setSelectedCard]=useState(0)
    const updateCurrent=()=>{
            dispatch({
                type:"SET_CURRENT",
                payload:daily[selectedCard]
            })
    }
    useEffect(()=>{
            updateCurrent()
    },[daily,selectedCard])
   
  return (
    <>
     <div className="cardWrap">
        <ul className="cardList">
            {
                
            
                daily && daily.length > 0 ? daily.map((item,index)=>{
                   if(index<7){
                    return <SingleCard key={index} item={item} className={index===selectedCard ? "active":""}
                    onClick={()=>{setSelectedCard(index);
                    updateCurrent()}}/>
                   }

                    
                }) :null
            }
        </ul>
     </div>
    </>
  )
}

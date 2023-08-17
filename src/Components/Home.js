import React from 'react'
import ChooseState from "./ChooseState/ChooseState"
import WeekInfoCard from './WeekInfoCard/WeekInfoCard'
import Humidity from './Humidity/Humidity'
import Left from './Left/Left'
export default function Home() {
  return (
    
    <>
        <div className="homeWrap">
            <div className="weatherSection">
                <Left/>
                <div className='rightSide'>
                    <ChooseState/> <br/>
                    <WeekInfoCard/><br/>
                    <Humidity/>
                </div>
            </div>
        </div>
    
    </>
  )
}

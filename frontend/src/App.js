import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [waterStatus, setWaterStatus] = useState(false)
  const [soilStatus, setSoilStatus] = useState(true)
  useEffect(() => {
    axios.get("http://192.168.1.77/")
      .then((response) => {
        console.log("done")
      })
  }, [])
  const TurnOnOffWater = () => {
    axios.get("http://192.168.1.77/turnOnOffWater").then((response) => {
      console.log("done")
    })
    setWaterStatus(!waterStatus);
  }

  const [weatherStatus, setWeatherStatus] = useState(true)
  useEffect(() => {
    axios.get("http://192.168.1.77/")
      .then((response) => {
        console.log("done")
      })
  }, [])
  const InfoWeather = () => {
    axios.get("http://192.168.1.77/turnOnOffWater").then((response) => {
      console.log("done")
    })
    setWeatherStatus(!weatherStatus);
  }
  

  return (
    <div className="App">
      <div className="Title">
        <h1>NÔNG TRẠI VUI VẺ</h1>
      </div>
      <div className="Grid-Container">
        <div className="Rain">{/*Le Kiet*/}
          <h2>THỜI TIẾT</h2>
          <div>
            {
              weatherStatus ?
              <img className='weather_sun' src="..\images\sun.png" alt="den_xanh" />
              :
              <img className='weather_rainny' src="..\images\rainny.png" alt="den_xanh" />
            }
          </div>
          <div>
            {
              weatherStatus ?
              <p className='sun'>Sunny day</p>
              :
              <p className='rain'>It's raining outside!!</p>
            }
          </div>
        </div>
        <div className="Water">{/*Dang Khoa*/}
          <h2>NƯỚC</h2>
          <div>
            {
              waterStatus ?
                <img className='signal_light' src="..\images\watering.gif" alt="nuoc_dang_tuoi"/>
                :
                <img className='signal_light' src="..\images\water.png" alt="nuoc_khong_tuoi"/>
            }
          </div>
        </div>
        <div className="Soil">{/*Duc Minh*/}
          <h2>ĐẤT</h2>
          <div className='soil_signal'>
            <div>
              {
                soilStatus ?
                <img className='signal_light' src="..\images\green_light.png" alt="den_xanh"/>
                :
                <img className='signal_light_gray' src="..\images\green_light.png" alt="den_xanh"/>
              }
            </div>
            <div>
              {
                soilStatus ?
                <img className='signal_light_gray' src="..\images\red_light.png" alt="den_do"/>
                :
                <img className='signal_light' src="..\images\red_light.png" alt="den_do"/>
              }
            </div>
          </div>
        </div>
        <div className="Mode">{/*Duc Minh*/}
          <h2>CHẾ ĐỘ</h2>
          <div>
            {
              waterStatus ?
                <button type="button" className="btn btn-danger mb-2"
                  onClick={() => TurnOnOffWater()} >TURN OFF WATER</button>
                :
                <button type="button" className="btn btn-success mb-2"
                  onClick={() => TurnOnOffWater()} >TURN ON WATER</button>
            }
          </div>
          <div>
            {
              // if(waterStatus){
              //   <button type="button" className="btn btn-danger mb-2"
              //     onClick={() => TurnOnOffWater()} >TURN OFF WATER</button>
              // }
              // else{
              //   <button type="button" className="btn btn-danger mb-2"
              //     onClick={() => TurnOnOffWater()} >TURN OFF WATER</button>
              // }
            }
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;

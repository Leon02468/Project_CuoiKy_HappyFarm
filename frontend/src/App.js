import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [watering, setWatering] = useState(false)
  const [waterStatus] = useState(false)
  const [soilStatus] = useState(true)
  const [weatherStatus] = useState(true)
  const [mode, setMode] = useState(true)

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
    setWatering(!watering);
  }

  useEffect(() => {
    axios.get("http://192.168.1.77/")
      .then((response) => {
        console.log("done")
      })
  }, [])

  return (
    <div className="App">
      <div className="Title">
        <h1>NÔNG TRẠI VUI VẺ</h1>
      </div>
      <div className="Grid-Container">
        {/*Le Kiet*/}
        {
          weatherStatus?
          <div className='weather-rainny'>
            <h2>THỜI TIẾT</h2>
            <img className='weather' src="..\images\rainny.png" alt="den_xanh" />
            <p className='rain'>It's raining</p>
          </div>
          :
          <div className='weather-sunny'>
            <h2>THỜI TIẾT</h2>
            <img className='weather' src="..\images\sun.png" alt="den_xanh" />
            <p className='sun'>Sunny day</p>
          </div>
        }
        <div className="watering">{/*Dang Khoa*/}
          <h2>NƯỚC</h2>
          <div>
            {
              watering ?
                <>
                  <img className='signal-light' src="..\images\watering.gif" alt="nuoc_dang_tuoi"/>
                </>
                :
                <>
                  <img className='signal-light' src="..\images\water.png" alt="nuoc_khong_tuoi" />
                </>
            }
          </div>
        </div>
        <div className="water-status">{/*Dang Khoa*/}
          <h2>BÌNH NƯỚC</h2>
          <div>
            {
              waterStatus ?
                <>
                  <img className='signal-light' src="..\images\water_empty.gif" alt="nuoc_dang_tuoi" />
                  <h4>Cần thêm nước vào bình chứa</h4>
                </>
                :
                <>
                  <img className='signal-light' src="..\images\water_full.gif" alt="nuoc_khong_tuoi" />
                  <h4>Nước đã đầy</h4>
                </>
            }
          </div>
        </div>
        <div className="soil">{/*Duc Minh*/}
          <h2>ĐẤT</h2>
          <div className='soil-signal'>
            <div>
              {
                soilStatus ?
                  <img className='signal-light' src="..\images\green_light.png" alt="den_xanh" />
                  :
                  <img className='signal-light-gray' src="..\images\green_light.png" alt="den_xanh" />
              }
            </div>
            <div>
              {
                soilStatus ?
                  <img className='signal-light-gray' src="..\images\red_light.png" alt="den_do" />
                  :
                  <img className='signal-light' src="..\images\red_light.png" alt="den_do" />
              }
            </div>
          </div>
        </div>
        <div className="mode">{/*Duc Minh*/}
          <h2>CHẾ ĐỘ</h2>
          <div>
            {
              watering ?
                <button type="button" className="btn btn-danger mb-2"
                  onClick={() => TurnOnOffWater()} >TURN OFF WATER</button>
                :
                <button type="button" className="btn btn-success mb-2"
                  onClick={() => TurnOnOffWater()} >TURN ON WATER</button>
            }
          </div>
          <button type="button" className="btn btn-dark">CHANGE MODE</button>
          <div>
            {
              weatherStatus ?
                <label>AUTO</label>
                :
                <label>MANUAL</label>
            }
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;

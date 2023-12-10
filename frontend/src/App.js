import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [watering, setWatering] = useState(false)
  const [waterStatus] = useState(false)
  const [soilStatus] = useState(true)
  const [weatherStatus] = useState(false)
  const [mode, setMode] = useState(true)

  const TurnOnOffWater = () => {
    axios.get("http://192.168.1.77/turnOnOffWater").then((response) => {
      console.log("done")
    })
    setWatering(!watering);
  }

  const ChangeMode = () => {
    setMode(!mode);
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
        <div className="watering">
          <h2>NƯỚC</h2>
          <div className='watering-status'>
            {
              watering ?
                <div>
                  <img className='watering-status-hose' src="..\images\watering.gif" alt="nuoc_dang_tuoi"/>
                </div>
                :
                <div>
                  <img className='watering-status-hose' src="..\images\water.png" alt="nuoc_khong_tuoi" />
                </div>
            }
            <div>
              <img className='flower' src="..\images\flower.gif" alt="bong_hoa"/>
            </div>
          </div>
        </div>
        <div className="water-status">
          <h2>BÌNH NƯỚC</h2>
          <div>
            {
              waterStatus ?
                <>
                  <img className='water-status-gif' src="..\images\water_empty.gif" alt="nuoc_day" />
                  <h4>Cần thêm nước</h4>
                </>
                :
                <>
                  <img className='water-status-gif' src="..\images\water_full.gif" alt="nuoc_thieu" />
                  <h4>Vẫn còn nước</h4>
                </>
            }
          </div>
        </div>
        <div className="soil">
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
        <div className="mode">
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
          <div className='mode-status'>
            {
              mode ?
                <h3>AUTO</h3>
                :
                <h3>MANUAL</h3>
            }
          </div>
          <button type="button" className="btn btn-dark"
           onClick={() => ChangeMode()}>CHANGE MODE</button>
          

        </div>
      </div>
    </div>
  );
}

export default App;

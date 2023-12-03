import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [waterStatus, setWaterStatus] = useState(false)
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

  return (
    <div className="App">
      <div className="Title">
        <h1>NÔNG TRẠI VUI VẺ</h1>
      </div>
      <div className="Grid-Container">
        <div className="Rain">
          <h2>MƯA</h2>
        </div>
        <div className="Sunny">
          <h2>NẮNG</h2>
        </div>
        <div className="Soil">
          <h2>ĐẤT</h2>
        </div>
        <div className="Water">
          <h2>NƯỚC</h2>
          <div>
            {
              waterStatus ?
                <img src="" alt="nuoc_dang_tuoi"></img>
                :
                <img src="" alt="nuoc_khong_tuoi"></img>
            }
          </div>
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
        </div>
      </div>
    </div>
  );
}

export default App;

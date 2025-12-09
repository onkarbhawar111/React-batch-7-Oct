import React, { useState } from 'react'
import './App.css'
import axios from 'axios'


const App = () => {
  const [city, setCity] = useState('')
  const [weather, setWeather] = useState([])

  async function handleClick(){
    const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'02f66cf59711ba625691484acbfa3246'}`)
    console.log(res.data)
    setWeather(res.data)
  }
  return (
    <div>
      <input type="text" placeholder='Enter your city' value={city} onChange={e => setCity(e.target.value)} />
      <button onClick={handleClick}>Search</button>
      <div>{ weather && <>
        <h2>Name: {weather.name}</h2>
        <h2>Temp: {weather.main?.temp}</h2>
        <h3>Latitude: {weather.coord?.lat}</h3>
        <h3>Longitude: {weather.coord?.lon}</h3>
      </>
        }
      </div>
    </div>
  )
}

export default App
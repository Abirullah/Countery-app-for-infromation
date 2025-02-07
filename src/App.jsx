import './App.css'
import axios from 'axios'
import { useState } from 'react'

function App() {
  const [Value, setValue] = useState("") // Corrected destructuring
  const [country, setCountry] = useState("")
  const [Population, setPopulation] = useState("")
  const [Region, setRegion] = useState("")
  const [Capital, setCapital] = useState("")
  const [Flag, setFlag] = useState("")
  const [Borders, setBorders] = useState("")
  const [Subregion, setSubregion] = useState("")
  const [timezone, setTimezone] = useState("")
  const [latitude, setLatitude] = useState("")
  const [longitude, setLongitude] = useState("")
  const [area, setArea] = useState("")
  const [Startofweek, setStartofweek] = useState("")
  const [carside, setcarside] = useState("")
  const [coatOfArms , setcoatOfArms] = useState("")
  const [code , setCode] = useState("")
  

 

  

  function getdata(){
    axios.get(`https://restcountries.com/v3.1/name/${Value}`)
      .then(function (response) {
        // handle success
        setCountry(response.data[0].name.official)
        setPopulation(response.data[0].population)
        setRegion(response.data[0].region)
        setCapital(response.data[0].capital)
        setFlag(response.data[0].flags.png)
        setBorders(response.data[0].borders)
        setSubregion(response.data[0].subregion)
        setTimezone(response.data[0].timezones)
        setLatitude(response.data[0].latlng[0])
        setLongitude(response.data[0].latlng[1])
        setArea(response.data[0].area)
        setStartofweek(response.data[0].startOfWeek)
        setcarside(response.data[0].car.side)
        setcoatOfArms(response.data[0].coatOfArms.png)
        setCode(response.data[0].idd.root+response.data[0].idd.suffix)
        
        console.log(response.data[0])
        

      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }

  return (
    <>
    <div className='main-div'>
      <div className="input-div">
        <input type="text" value={Value} onChange={(e) => setValue(e.target.value)} />
        <button onClick={getdata}>Get Data</button>
      </div>
      <div className="output-div">

        <div className="head">
        <h2>Countery detail</h2>
        <h3>{country}</h3>
        <div className="img">
          <img src={Flag} alt="flag"/>
          <img src={coatOfArms} alt="" />
        </div>
        </div>
        <div className="info">
        <div className="info-dev-1">
           <p>Population: {Population}</p>
           <p>Region: {Region}</p>
           <p>Subregion: {Subregion}</p>
           <p>Capital: {Capital}</p>
           <p>Borders: {Borders}</p>
            <p>Code: {code}</p>
                      
        </div>
        <div className="info-dev-2">
            <p>Timezone: {timezone}</p>
            <p>Latitude: {latitude}</p>
            <p>Longitude: {longitude}</p>
            <p>Area: {area}</p>
            <p>Start of week: {Startofweek}</p>
            <p>Independent: {carside}</p>
        </div>
        </div>
        


      </div>
       

    </div>
      
      
    </>
  )
}

export default App
import React, { useState } from 'react'
import image from '../../Image/Wall.jpg'
import Hotweather from '../../Image/HotWeather.jpg'
import image2 from '../../Image/Landcape2.jpg'
import weatherForcast from '../../Image/weatherForcast.jpg'

export default function WeatherApp() {
    // fetch api
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '2f16c140e4mshf198d7c914764bdp1c1007jsn7cf821cc3ed1',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };
    const getWeather = (city)=>{
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            !response.temp ? setWeatherBox('error'):
            setWeatherVal((oldval)=>{
                                return{
                                    ...oldval,
                                    temp:response.temp,
                                    min_temp:response.min_temp,
                                    max_temp:response.max_temp,
                                    humidity: response.humidity,
                                    wind_speed: response.wind_speed,
                                    wind_degrees: response.wind_degrees,
                                    feels_like: response.feels_like,
                                }
                            })
        })
        .catch(err => console.log(err));
        
    }    

    // creating state using useState Hook
    const [searchClass , setSearhClass] = useState('search-btn-overlap')
    const [inputValue, setInputValue] = useState('')
    const [weatherBox , setWeatherBox] = useState('starting')
    const [cityName, setCityName] = useState("City Name")
    const [weatherVal , setWeatherVal] = useState({
        temp:'',
        min_temp:'',
        max_temp:'',
        humidity:'',
        wind_speed:'',
        wind_degrees:'',
        feels_like:'',
    })

    // select background Image 
    const weather = weatherVal.temp === '' ? image : weatherVal.temp > 25 ? Hotweather : image2;


    const searchValue = ()=>{
        if(searchClass === 'search-btn-overlap'){
            setSearhClass('none')
        }else{
            setSearhClass('search-btn-overlap');
            setWeatherBox('data')
            setCityName(inputValue);
            setInputValue('')
            getWeather(inputValue);
        }
    }
    return (
        <> 
            <div style={{backgroundImage: `url(${weather})`}} className="container">
                <div className="border">
                    <div className="search-box">
                        <input onChange={(event)=>{setInputValue(event.target.value)}} type="text" value={inputValue} id='city-name'/>
                        <div onClick={searchValue} className={`search-btn ${searchClass}`}>
                            <label htmlFor="city-name">Search</label>
                        </div>
                    </div>
                    <div className={`output-box `}>
                    {
                        weatherBox ==='data' ? 
                        <ul >
                            <li>
                                <h2 className='city'>Weather in {cityName}</h2>
                            </li>
                            <li>
                                <h1 className="city-temp" id='temp'><span>{weatherVal.temp}&#x2103;</span></h1>
                            </li>
                            <li>
                            <ul className='other-temp'>
                                <li>
                                    <p className='other'>Min Temp <span id="min-temp">{weatherVal.min_temp}&#x2103;</span></p>
                                </li>
                                <li>
                                    <p className='other'>Max Temp <span id="max-temp">{weatherVal.max_temp}&#x2103;</span></p>
                                </li>
                                <li>
                                    <p className='other'>Humidity  <span id="humidity">{weatherVal.humidity}%</span></p>
                                </li>
                                <li>
                                    <p className='other'>Feels like <span id="feels-like">{weatherVal.feels_like}&#x2103;</span></p>
                                </li>
                                <li>
                                    <p className='other'>Wind Speed <span id="wind-speed">{weatherVal.wind_speed}km/h</span></p>
                                </li>
                                <li>
                                    <p className='other'>Wind Degree <span id="wind-degree">{weatherVal.wind_degrees}&#x2103;</span></p>
                                </li>
                            </ul>
                            </li>
                        </ul>
                        :
                        weatherBox === 'starting'?
                        <div className="weather_forcast">
                            <img src={weatherForcast} alt="" />
                        </div>:
                        <div className="show_error">
                            <h2>Sorry ! no record found.</h2>
                        </div>
                    }
                    </div>
                </div>
            </div>
        </>
    )
}
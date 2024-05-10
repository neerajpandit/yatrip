import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import WeatherApp from '../../components/WeatherApp/WeatherApp';

const Weather = () => {
  return (
    <div className="relative">
     
      <div className="">
     
      <WeatherApp/>


        <Footer />
      </div>
    </div>
  )
}

export default Weather
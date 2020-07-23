import React, { Component } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import Header from './components/Header.js'
import Image from './components/Image.js'
import SideHeader from './components/SideHeader.js'
import MainInfor from './components/MainInfor.js'

import {chooseTheme} from './utils/index.js'

const cities = [
  ['Rome', 'Hong Kong', 'New York', 'Tokyo'],
  ['Agra', 'Dubai', 'Los Angeles', 'Shanghai'],
  ['Bangkok', 'Singapore', 'Amsterdam', 'Paris']]

const countries = [
  ['Spain', 'China', 'USA', "Japan"],
  ['India', 'Arab Emirates', 'USA', "China"],
  ['Thailand', 'Singapore', 'England', 'France']
]
const images = [
  ['https://i.insider.com/59ef6bfdddd0632d008b6ffb?width=1300&format=jpeg&auto=webp',
    'https://i.insider.com/5c0ab1b6f3d3491d363f1c38?width=1300&format=jpeg&auto=webp',
    'https://i.insider.com/5b9137e10ce5f5b27e8b4a0c?width=1800&format=jpeg&auto=webp',
    'https://i.insider.com/5bc505893fe2290573427eb8?width=1300&format=jpeg&auto=webp'],
  ['https://i.insider.com/5c0a9ee8293b711a86619140?width=1300&format=jpeg&auto=webp',
    'https://i.insider.com/5c0587e85d58ed56b052f1a2?width=1300&format=jpeg&auto=webp',
    'https://i.insider.com/5bb242159a4ab801301109a2?width=1300&format=jpeg&auto=webp',
    'https://i.insider.com/5b44c44377ac2d23008b4ba4?width=1300&format=jpeg&auto=webp'],
  ['https://i.insider.com/5ad90d4e38e2fcdd008b4a08?width=1300&format=jpeg&auto=webp',
    'https://i.insider.com/5c0ab04d1486fd1f1f7ecbcd?width=1300&format=jpeg&auto=webp', 
    'https://i.insider.com/5c0aa1d793276619c9657b8f?width=1300&format=jpeg&auto=webp', 
    'https://i.insider.com/5b11b3a21ae66246008b4b2f?width=1300&format=jpeg&auto=webp']
]

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      weather: null
    }
  }

  componentDidMount() {
    this.getWeather(null, 'London', 'city')
  }

  async getWeather(latlon = null, cityName = null, fetchBy = 'city') {
    let apiKey = 'f89a7c459a1bb745851f7a1adc58324f'
    let domain = 'http://api.openweathermap.org/data/2.5/weather?'

    let urlByCity = cityName !== null ? `${domain}q=${cityName}&units=metric&appid=${apiKey}` : null
    let urlByLocation = latlon !== null ? `${domain}lat=${latlon[0]}&units=metric&lon=${latlon[1]}&appid=${apiKey}` : null

    if (urlByCity === null && urlByLocation === null) {
      alert("City not found!")
      return
    }

    let url = fetchBy === 'city' ? urlByCity : urlByLocation
    try {
      let response = await fetch(url)
      let data = await response.json()

      if (response.status === 200) {
        this.setState({ weather: data })
        chooseTheme()
      } else {
        alert("City not found!", data)
      }
    } catch (err) {
      alert("City not found!", err)
    }
  }

  searchCity(){
    let input = document.getElementById('search-input').value
    if (input === ''){
      alert("You need to enter something before searching")
      return;
    }
    this.getWeather(null, input, 'city')
  }

  render() {
    if (this.state.weather === null) {
      return (
        <h1>Loading...</h1>
      )
    }

    return (
      <div className="container-fluid text-white myApp">
        <div className="myAppBox">
          <div className='row front-page'>

            <div className='col-md-8 main-section'>
              <div className="justify-content-center text-center">
                <Header searchCity={this.searchCity.bind(this)}></Header>
                <h1 className="weather-text text-dark">Weather <strong>Forecast</strong></h1>
                <div className='Imagers'>
                  {[...Array(3).keys()].map((i) => {
                    return <Image key={`Image-${i}`} cityGroup={cities[i]} imageGroup={images[i]} countryGroup={countries[i]} fetchWeather={this.getWeather.bind(this)}></Image>
                  })}
                </div>
              </div>
            </div>

            <div className='col-md-4 side-bar' id='dn-side-bar'>
              <SideHeader></SideHeader>
              <MainInfor myWeather={this.state.weather}></MainInfor>
            </div>

          </div>
        </div>
      </div>
    )
  }
}
import React, { Component } from 'react'

export default class Image extends Component {
    render() {
        let cities = this.props.cityGroup
        let images = this.props.imageGroup
        let getWeather = this.props.fetchWeather
        let countries = this.props.countryGroup
        return (
            <div className='row ImageGroup'>
                {
                    [...Array(4).keys()].map((i) => {
                        return <div key={`${cities[i]}`}>
                            <button className='location-btn btn' id={`${cities[i]}`} onClick={() => getWeather(null, cities[i], 'city')}>
                                <img src={`${images[i]}`} alt='...' ></img>
                            </button>
                            <p className='dn-city-text'>{cities[i]}, {countries[i]}</p>
                        </div>
                    })
                }
            </div>
        )
    };
}


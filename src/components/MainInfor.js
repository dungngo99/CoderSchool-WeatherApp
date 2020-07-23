import React, { Component } from 'react'
import {formatTime} from '../utils/index.js'

export default class MainInfor extends Component {
    render() {
        let weather = this.props.myWeather
        return (
            <div className='dn-main-infor' style={{ 'width': '100%', 'color':'white'}}>
                <div className='row'>
                    <div className='col-6-md'></div>
                    <div className='col-6-md'>
                        <h1>Today</h1>
                        <h5>{formatTime(weather.dt, true)}</h5>
                    </div>
                </div>
                <div style={{ 'width': '100%', 'textAlign':'center'}}>
                    <h1 className="col-12 main-temp" >{weather.main.temp} <span className='celcius-sub'><sup>o</sup>C</span></h1>
                    <h2 className="col-12">{weather.name}</h2>
                </div>
                <div>
                    <span>Feels like {weather.main.feels_like} <span className='celcius-sub'><sup>o</sup>C</span></span>
                    <span> - </span>
                    <span>{formatTime(weather.sys.sunset, false)}</span>
                </div>
                <div>
                    <span id={'dn-min'}>{weather.main.temp_min} <span className='celcius-sub'><sup>o</sup>C</span></span>
                    <span> / </span>
                    <span id={'dn-max'}>{weather.main.temp_max} <span className='celcius-sub'><sup>o</sup>C</span></span>
                </div>
            </div>
        )
    }
}

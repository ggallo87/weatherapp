import React, {Component} from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import transformWeather from '../../services/transformWeather';
import {SUN} from './../../constants/weathers';

const data1 = {
         temperature: 20,
         weatherState: SUN,
         humidity: 18,
         wind: '10 m/s'
};

const apiKey = "9eb256370f6bbf467914a5cd153eccfc";
const apiCity = "Cordoba, ar";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${apiCity}&appid=${apiKey}`;

class weatherLocation extends Component {
    
    constructor() {
        super();
        this.state= {
            city: 'Cordoba',
            data: data1,
        };
    };

    handleUpdateClick = () =>{

        fetch(apiUrl).then( data => {
            return data.json();
        }).then(weather_data =>{
            const data = transformWeather(weather_data);
            this.setState( { data } );

        });

    }
    
    render = () => {
        const {city, data} = this.state;

        return(
            <div className='weatherLocationCont'>
                <Location city={city}/>
                <WeatherData data={data}/>
                <button onClick={this.handleUpdateClick}>Actualizar</button>
            </div>
        );
    };
}

export default weatherLocation;
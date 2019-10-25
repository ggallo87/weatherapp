import React from 'react';
import WeatherTemperature from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo';
import {CLOUD, CLOUDY, SUN, RAIN, SNOW, WINDY} from './../constants/weathers';

const WeatherData = () => (
    <div>
        <WeatherTemperature temperature={20} weatherState={SUN}/>
        <WeatherExtraInfo humidity={80} wind={10}/>
    </div>
);

export default WeatherData;
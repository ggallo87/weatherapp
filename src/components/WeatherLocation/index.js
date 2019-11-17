import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData';

const weatherLocation = () => (
    <div className='weatherLocationCont'>
        <Location city={"Cordoba"}/>
        <WeatherData/>
    </div>
);

export default weatherLocation;
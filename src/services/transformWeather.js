import convert from 'convert-units';
import {SUN} from './../constants/weathers';

const getWeatherState = () =>{
    return SUN;
}

const getTemp = temp =>{
    return parseInt(convert(temp).from('K').to('C').toFixed(0), 10) ;
}

const transformWeather = weather_data =>{
    const {humidity, temp } = weather_data.main;
    const { speed } = weather_data.wind;
    const weatherState = getWeatherState();
    const temperature = getTemp(temp);
    const data = {
        humidity,
        temperature,
        weatherState,
        wind: `${speed} m/s`,

    }
    return data;
}

export default transformWeather;
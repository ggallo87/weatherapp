import React, {Component} from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import transformWeather from '../../services/transformWeather';
import CircularProgress  from 'material-ui/CircularProgress';

const apiKey = "9eb256370f6bbf467914a5cd153eccfc";
const url = "https://api.openweathermap.org/data/2.5/weather";


class weatherLocation extends Component {
    
    constructor({ city }) {
        super();
        this.state= {
            city,
            data: null,
        };
    }

    handleUpdateClick = () =>{
        const { city } = this.state;
        const apiWeather = `${ url }?q=${ city }&appid=${ apiKey }`;
        fetch(apiWeather).then( data => {
            return data.json();
        }).then(weather_data =>{
            const data = transformWeather(weather_data);
            this.setState( { data } );

        });

    }

    
    componentWillMount() {
        this.handleUpdateClick();
    }
    
    
    render = () => {
        const {city, data} = this.state;

        return(
            <div className='weatherLocationCont'>
                <Location city={city}/>
                { data ? <WeatherData data={data}/> : 
                <CircularProgress size={ 60 } thickness={ 7 }/> }
            </div>
        );
    };
}

export default weatherLocation;
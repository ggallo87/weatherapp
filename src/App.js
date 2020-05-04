import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar   from 'material-ui/AppBar';
import Paper  from 'material-ui/Paper';
import {Grid, Row, Col} from 'react-flexbox-grid';
import LocationList from './components/LocationList';
import DetailLocationExtends from './components/DetailLocationExtends';
import './App.css';

const cities = [
    "Buenos Aires, ar",
    "Cordoba, ar",
    "Huinca Renanco, ar",
    "Catamarca, ar"
];
class App extends Component {

  constructor(){
    super();
    this.state = {
        city : null
      }
  }

  handleSelectedLocation = city => {
    this.setState({ city });
    console.log(`handleSelectedLocation ${city}`);
  }

  render() {

    const { city } = this.state;

    return(
            <MuiThemeProvider>
               <Grid>
                 <Row>
                   <Col xs= { 12 }>
                     <AppBar title= "Weather App" />
                   </Col>
                    
                 </Row>
                 <Row>
                    <Col xs={ 12 } md={ 6 }>
                        <LocationList 
                          cities={ cities }
                          onSelectedLocation= { this.handleSelectedLocation }/>
                    </Col> 
                    <Col xs={ 12 } md={ 6 }>
                      <Paper zDepth= { 4 }>
                        <div className='details'> 
                          {
                            city && 
                            <DetailLocationExtends city={ city }/>
                          }
                          
                        </div>
                      </Paper>
                    </Col>
                 </Row>
                  
               </Grid>
            </MuiThemeProvider>
    );
  }
}

export default App;

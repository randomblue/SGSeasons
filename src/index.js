import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        //THIS IS THE ONLY TIME we do direct assignemtn
        //to this.state
        this.state = {lat: null};

        window.navigator.geolocation.getCurrentPosition(
            (GeolocationPosition) => {
                this.setState({ lat: GeolocationPosition.coords.latitude});
                console.log(GeolocationPosition)
            },

            (err) => console.log(err)
        );
    }

    //React says we have to define render!!
    render() {
        return <div>Latitude: {this.state.lat}</div>
    }
}

ReactDOM.render(<App />,document.querySelector('#root'));
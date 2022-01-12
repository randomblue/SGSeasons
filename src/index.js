import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        //THIS IS THE ONLY TIME we do direct assignemtn
        //to this.state
        this.state = {lat: null, errorMessage:''};

        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({ lat: position.coords.latitude});
                console.log(position)
            },

            (err) => {
                this.setState({ errorMessage: err.message});
                console.log(err)
            }
        );
    }

    //React says we have to define render!!
    render() {
        if(this.state.errorMessage && !this.state.lat) {
            return <div> Error:{this.state.errorMessage}</div>
        }

        if (!this.state.errorMessage && this.state.lat) {
            return <div>Latitude: {this.state.lat}</div>
        }

        return <div>Loading!</div>
    }
}

ReactDOM.render(<App />,document.querySelector('#root'));
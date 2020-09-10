import React from "react";
import ReactDOM from "react-dom";




class App extends React.Component {
    constructor(props) {
        super(props);

        // this is the only time we do direct assignment to this.state. Always use setState()
        this.state = {lat : null};

        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                //we called set state!!!!
                this.setState({
                    lat : position.coords.latitude

                })
            },
            (err) => console.log(err)
        );
    }
    // react says we have to define render
    render() {
        return <div>
            Latitude: {this.state.lat}
        </div>
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));
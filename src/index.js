import React from 'react';
import ReactDOM from 'react-dom'

const buttonStyles = {
  backgroundColor: '#61dbfb',
  border: 'none',
  borderRadius: 5,
  color: 'white',
  cursor: 'pointer',
  fontSize: 18,
  margin: 30,
  padding: 10,
};

function randomProperty(obj) {
  const keys = Object.keys(obj);
  return obj[keys[(keys.length * Math.random()) << 0]];
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCountry: null,
      image: 'https://www.countryflags.io/US/shiny/64.png',
    };
    this.makeTimer();
  }

  makeTimer() {
    let countries = {
      USA: 'https://www.countryflags.io/US/shiny/64.png',
      Australia: 'https://www.countryflags.io/AU/shiny/64.png',
      'Puerto Rico': 'https://www.countryflags.io/PR/shiny/64.png',
    };
    setInterval(() => {
      let currentCountry = randomProperty(countries);
      this.setState({ currentCountry });
    }, 1000);
  }

  stopInterval = () => {
    clearInterval(this.interval);
  };

  render() {
    return (
      <div className="app">
        <h1>where are you going on vacation?</h1>
        <img alt="" src={this.state.currentCountry} />
        <button style={buttonStyles} onClick={this.stopInterval}>
          choose country
        </button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
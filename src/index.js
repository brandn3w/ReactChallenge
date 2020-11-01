// index.js
import React from 'react'
import ReactDOM from 'react-dom'


// CSS styles in JavaScript Object
const buttonStyles = {
  backgroundColor: '#61dbfb',
  padding: 10,
  border: 'none',
  borderRadius: 5,
  margin: 3,
  cursor: 'pointer',
  fontSize: 18,
  color: 'white',
}
class App extends React.Component {
constructor(props){
  super(props);
  this.state = { image: 'https://www.countryflags.io/US/shiny/64.png'}
  this.makeTimer()
}

  makeTimer(){
    setInterval(() => {
      let countries = {
        USA: 'https://www.countryflags.io/US/shiny/64.png',
        Australia: 'https://www.countryflags.io/AU/shiny/64.png' ,
        Puerto: 'https://www.countryflags.io/PR/shiny/64.png' 
      }
      let currentCountry = Object.entries(countries).map(([key, value]) => <div>({key, value })</div>)
      this.setState({ currentCountry })
    }, 1000)
  }

  render() {

    return (
      <div className='app'>
        <h1>where you're going on vacation?</h1>
       <img src = {this.state.currentCountry} alt='country'/>
        <button
          style={buttonStyles}
        >
          Click me 
 </button>

      </div>
    )
  }
}
const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
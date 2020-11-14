import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

const Cat= ({ cat: {name, weight, lifespan } }) => {
  return (
    <div className='cat'>
      <div className='cat_wrapper'>
    
      </div>
      <h3 className='cat_breed'>{name.toUpperCase()}</h3>
      <div class='country_text'>
        <p>
          <span>Weight:{weight}</span>
      
        </p>
      </div>
    </div>
  )
}

class App extends Component {
  state = {
    data: [],
  }

  componentDidMount() {
    this.fetchCatData()
  }
  fetchCatData = async () => {
    const url = 'https://api.thecatapi.com/v1/breeds'
    try {
      const response = await axios.get(url)
      const data = await response.data
      this.setState({
        data,
      })
    } catch (error) {
      console.log(error)
    }
  }

  render() {

    return (
      <div className='App'>
        <h1>React Component Life Cycle</h1>
        <h1>Calling API</h1>
        <div>
          <p>There are {this.state.data.length} cats in the api</p>
          <div className='countries-wrapper'>
            {this.state.data.map((cat) => (
              <Cat cat={cat} />
            ))}
          </div>
        </div>
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

const Cat = ({ cat: { name, weight, life_span, description } }, { image: url }) => {
  return (
    <div className='cat'>
      <div className='cat_wrapper'>
        <img src={url} alt="catimage" />
      </div>
      <h3 className='cat_breed'>{name.toUpperCase()}</h3>
      <div className='country_text'>

        <span>Weight:{weight.metric}</span>
        <span>Lifespan: {life_span}</span>
        <div>Description: {description}</div>


      </div>
    </div>
  )
}

class App extends Component {
  state = {
    data: [],
    data2: []
  }

  componentDidMount() {
    this.fetchCatData()
  }
  fetchCatData = async () => {
    const url = 'https://api.thecatapi.com/v1/breeds'
    const images = 'https://api.thecatapi.com/v1/images/search?breed_id=abys'
    try {
      const response = await axios.get(url)
      const response2 = await axios.get(images)
      const data = await response.data
      const data2 = await response2.data2
      this.setState({
        data, data2
      })
    } catch (error) {
      console.log(error)
    }
  }

  render() {

    return (
      <div className='App'>

        <div>
          <p>There are {this.state.data.length} cats in the api</p>
          <div className='wrapper'>
            {this.state.data.map((cat, image) => (
              <Cat image={this.state.data2[image]} cat={cat} key={cat.id} />
            ))}
          </div>
        </div>
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
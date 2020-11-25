import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

const Cat = ({ cat: { name, weight, life_span, description, url }}) => {
  return (
    <div className='cat'>
      <div className='cat_wrapper'>
        <img alt="catimage" src={url} width="50" height="30"/>
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
      const data2 = await response2.data
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
            {this.state.data.map((cat) => {
                  
               
                  cat.url = this.state.data2[0].url;
               return    <Cat cat={cat} key={cat.id} image = {cat.url[0]}/>

            }

             
            )}
          </div>
        </div>
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
//index.js

import React from 'react'
import ReactDOM from 'react-dom'


class App extends React.Component {
  state = {
    image: 'https://www.smithsstationah.com/imagebank/eVetSites/Feline/01.jpg',
  }

  changeAnimal =()=>{
    let dogUrl =     'https://static.onecms.io/wp-content/uploads/sites/12/2015/04/dogs-pembroke-welsh-corgi-400x400.jpg'
    let catUrl =  'https://www.smithsstationah.com/imagebank/eVetSites/Feline/01.jpg'
    let image = this.state.image === catUrl ? dogUrl : catUrl
    this.setState({image})
  }
  render() {
    return (
      <div className='app'>
               <div className='animal'>
          <img src={this.state.image} alt='animal' />
          </div>
          <button onClick={this.changeAnimal}>change</button>
      </div>
  )
  }
}
  

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
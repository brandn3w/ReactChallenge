import React from 'react'
import ReactDOM from 'react-dom'

const Button = ({ text, onClick, style }) => (
  <button style={style}

    onClick={onClick}>
    {text}
  </button>

)


class Header extends React.Component {

  render() {
    const {
      welcome } = this.props.data

    return (
      <header>
        <div className='header-wrapper'>
          <h1>{welcome}</h1>
          <p>Select a country for your next holiday</p>
        </div>
      </header>
    )
  }
}


class App extends React.Component {
  state = { loggedIn: false }
  handleLogin=()=>{
    this.setState({
      loggedIn : !this.state.loggedIn,
    })
  }
  render() {

    const data = {
      welcome: 'Welcome',
      text:'login'
    }

    let status
    let text
    if (this.state.isLoggedIn) {
      status = <h3>Welcome to 30 days of React</h3>
      text='Logout'
    } else {
      status = <h3>Please log in </h3>
      text='Login'
    }

    return (
      <div className='app'>

        <Header data={data}

        />
        {status}
        <Button 
        style={{backgroundColor:'yellow'}}
        text={text}
        onClick={this.handleLogin} />

      </div>
    )
  }
}
const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
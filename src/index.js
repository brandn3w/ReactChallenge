import React from 'react'
import ReactDOM from 'react-dom'

const Button = ({ text, onClick, style }) => (
  <button style={style}

    onClick={onClick}>
    {text}
  </button>

)

const Login = () => (
  <div>
    <h3>Please log in</h3>

  </div>
)
const Welcome = (props) => (
  <div>
    <h3>Welcome</h3>
  </div>
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
  handleLogin = () => {
    this.setState({
      isLoggedIn: !this.stateLoggedIn
    })
  }
  render() {

    const data = {
      welcome: 'Welcome',
      text: 'login'
    }

    const status = this.state.loggedIn ? <Welcome /> : <Login />

    return (
      <div className='app'>

        <Header data={data}

        />
        {status}
        <Button
          style={{ backgroundColor: 'yellow' }}
          text={text}
          onClick={this.handleLogin} />

      </div>
    )
  }
}
const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
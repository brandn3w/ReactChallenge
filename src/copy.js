import React from 'react'
import ReactDOM from 'react-dom'

const Button =({text, onClick, style})=>(

    <button
    style= {style}
    onClick={onClick}>
        {text}
        </button>
)
class App extends React.Component{
    
   state = { loggedIn: false };

  handleLogin = ()=>{
       this.setState({
           loggedIn: !this.state.loggedIn
       })
    }
    render(){
        
    const 
      };
        return(
            <div className='app' style={styleQuestion}>
            <Main colorChange ={this.colorChange}
            />
            </div>
        )
    }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
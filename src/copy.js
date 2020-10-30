import React from 'react'
import ReactDOM from 'react-dom'

class Main extends React.Component{
    
    render(){
        const colorChange=this.props
        return(
            <main>
            <h1>Welcome</h1>
            <button
            onClick = {colorChange}> change color </button>
            </main>
        )
    }
}

class App extends React.Component{
    constructor(props){
    super(props)
    this.state = { backgroundColor: 'blue' };
    }
    colorChange = ()=>{
        let bgcolor=this.state.backgroundColor==='blue'? { backgroundColor: 'red' } : { backgroundColor: 'blue' }
        this.setState(bgcolor)
    }
    render(){
        
    const styleQuestion = {
        backgroundColor: this.state.backgroundColor,
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
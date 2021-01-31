//index.js

import React from 'react'
import ReactDOM from 'react-dom'
import { findRenderedComponentWithType } from 'react-dom/test-utils'

// class base component
class Header extends React.Component {
  constructor(props) {
    super(props)
    // the code inside the constructor run before any other code
  }
  render() {
      const {
          welcome,
          title,
          subtitle,
          author:{firstName, lastName},
          date,
      } = this.props.data
    return (
      <header>
        <div className='header-wrapper'>
          <h1>{welcome}</h1>
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
          <p>{firstName} {lastName}</p>
          <small>{date}</small>
        </div>
      </header>
    )
  }
}

// TechList Component
// class base component
class TechList extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { techs } = this.props
    const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)
    return techsFormatted
  }
}

// Main Component
// Class Component
class Main extends React.Component {

  render() {
    const {changeColor} = this.props
    return (
      <main>
        <div className='main-wrapper'>
          <p>Prerequisite to get started react.js:</p>
          <ul>
            <TechList techs={this.props.techs}/>
          </ul>
          <button onClick={()=>changeColor()}>change color</button>
        </div>
      </main>
    )
  }
}

// Footer Component
// Class component
class Footer extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <footer>
        <div className='footer-wrapper'>
          <p>Copyright 2020</p>
        </div>
      </footer>
    )
  }
}

// The App, or the parent or the container component
// Class Component
class App extends React.Component {
  state ={
    styles: {
      backgroundColor: "white",
      color: "black"}
  }
  changeColor = () => {
    let lightStyle= {styles: {backgroundColor: 'white', color: "black"}}
    let darkStyle ={styles: {backgroundColor: "black", color:"white"}}
    let pageStyle = this.state.styles.backgroundColor === "white" ? darkStyle :lightStyle
    this.setState(pageStyle)
  }

  style = () => {
    return this.state.styles;
  }

  render() {

    const data = {
        welcome: 'Welcome to 30 Days Of React',
        title: 'Getting Started React',
        subtitle: 'JavaScript Library',
        author: {
          firstName: 'Asabeneh',
          lastName: 'Yetayeh',
        },
        date: 'Oct 7, 2020',
      }
      const techs = ['HTML', 'CSS', 'JavaScript']
    return (
      <div className='app' style= {this.state.styles}>
     
        <Header data={data}/>
        <Main techs={techs} changeColor = {this.changeColor}/>
     
        <Footer />
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
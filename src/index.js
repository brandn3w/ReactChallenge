import React from 'react';
import ReactDOM from 'react-dom';
import Image from './images/10512dragon_figure.jpg'
import UserCard from './UserCard';
const welcome = 'Welcome to 30 Days Of React'
const title = 'Getting Started React'
const subtitle = 'JavaScript Library'

const author = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
}
const date = 'Oct 3, 2020'

const Header = () => (
  <header>
    <div className='header-wrapper'>
      <h1>{welcome}</h1>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>{author.firstName}{author.lastName}</p>
      <small>{date}</small>
    </div>
  </header>
)

// User Card Component
const yearBorn = 1820
const currentYear = 2020
const age = currentYear - yearBorn
const personAge = (
  <p>
    {' '}
    {author.firstName} {author.lastName} is {age} years old
  </p>
)
// const UserCard = () => (
//   <div className='user-card'>
//     <img src={Image} alt='asabeneh image' />
//     <h2>{author.firstName}{author.lastName}</h2>
//   </div>
// )

// TechList Component

  const techs = ['HTML', 'CSS', 'JavaScript']
  const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)

// Main Component
const Main = () => (
  <main>
    <div className='main-wrapper'>
      <p>Prerequisite to get started react.js:</p>
      <ul>
       {techsFormatted}
      </ul>
      <UserCard />
    </div>
  </main>
)

// Footer Component
const copyRight = 'Copyright 2020'
const Footer = () => (
  <footer>
    <div className='footer-wrapper'>
<p>{copyRight}</p>
    </div>
  </footer>
)

// The App, or the parent or the container component
const App = () => (
  <div className='app'>
    {/* <Header />
    <Main />
    <Footer /> */}
<UserCard/>
  </div>
)

const rootElement = document.getElementById('root')
// we render the App component using the ReactDOM package
ReactDOM.render(<App />, rootElement)

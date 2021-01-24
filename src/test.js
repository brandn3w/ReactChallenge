import React from 'react'
import ReactDOM from 'react-dom'

// Hexadecimal color generator
const hexaColor = () => {
  let str = '0123456789abcdef'
  let color = ''
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length)
    color += str[index]
  }
  return '#' + color
}
console.log(hexaColor())

const colorArray = () => {
  let colors = []
  for (let i = 0; i <= 6; i++) {
    colors.push(hexaColor())
  }
  return colors;
}
console.log(colorArray())

const HexaColor = () =>

  <div>
    <h2>{colorArray().map((color)=><div 
    key={color}
  style={{backgroundColor: `${color}`}}>
    {color}
    </div>)}
    </h2>
  </div>


const rootElement = document.getElementById('root')
// we render the App component using the ReactDOM package
ReactDOM.render(<HexaColor />, rootElement)

export default HexaColor;
import React from 'react'
import ReactDOM from 'react-dom'

//const numbers = [1,2,3,4,5,6,7,8.9,10,11,12,13,14,15,16,17,18]
// const even=[]
// const odd=[]
// const primes=[]

// const createArrays= function (numbers) {
//   for (var i = 0; i< numbers.length; i++) {
//     if (numbers[i] % 2 === 0) {
//       even.push(numbers[i])
//       console.log(even)
//     }
//     else if (numbers[i] % 2 !== 0) {
//       odd.push(numbers[i])
//     } else {
//       primes.push(numbers[i])
//     }
//   }
// }
// createArrays(numbers)


function groupNumbers() {

  var arr = [1,2,3,4,5,6,7,8,9,10];
  var even=[]
  var odd=[]

  var evenNumbers = arr.filter(number => number % 2 === 0);
even.push(evenNumbers)
  console.log("Even numbers " + even);

  var oddNumbers = arr.filter(number => number % 2 !== 0);
  odd.push(oddNumbers)
  console.log("Odd numbers " + odd);
}

groupNumbers();

// // Skill Component
// const Skill = ({ skill: [tech, level] }) => (
//   <li>
//     {tech} {level}
//   </li>
// )

// // Skills Component
// const Skills = ({ skills }) => {
//   const skillsList = skills.map((skill) => <Skill skill={skill} />)
//   console.log(skillsList)
//   return <ul>{skillsList}</ul>
// }

const App = () => {
  return (
    <div className='container'>
      <div>
  
      </div>
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
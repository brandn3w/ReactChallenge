import React from 'react'
import ReactDOM from 'react-dom'
import ColorfulNumbers from './excerciseNumbers';

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


// function groupNumbers() {
//   
 
//   var even=[]
//   var odd=[]
// var prime=[]
//   var evenNumbers = arr.filter(number => number % 2 === 0);
// even.push(evenNumbers)
//   console.log(even);

//   var oddNumbers = arr.filter(number => number % 2 !== 0);
//   odd.push(oddNumbers)
//   console.log(odd);
//   var primeNumbers = arr.filter(number => number % 2 !==0);
//   prime.push(primeNumbers)
//   console.log(primeNumbers)
// }

// groupNumbers();



    /**
     * An integer is prime if it is not divisible by any prime less than or equal to its square root
     **/
    var numArray = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
 numArray = numArray.filter((number) => {

    for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
    }
return false
    });
   
console.log(numArray)



// const Grid = ()=>(
  
//     <div className='grid'>
//       {arr.map(number=><span key={number}
//       style={
//      number% 2 ===0 ? {backgroundColor:'green'} :
//   (number% 2 !==0 ? {backgroundColor: 'yellow'} : {backgroundColor:'red'})
//      }>{number}</span>)}
//   </div>
// )

// Skill Component
const Skill = ({ skill: [tech, level] }) => (
  <li>
    {tech} {level}


  </li>
)

const skills = [
  ['HTML', 10],
  ['CSS', 7],
  ['JavaScript', 9],
  ['React', 8],
]
// Skills Component
const Skills = ({ skills }) => {
  const skillsList = skills.map((skill) => <Skill skill={skill} />)
  console.log(skillsList)
  return <ul>{skillsList}</ul>
}

const App = () => {

  return (
    <div className='container'>
   <Skills skills={skills}/>
   <ColorfulNumbers />
    </div>
  )
  }

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
import React from 'react'

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

const isPrime= num =>{
for (let i=2; i<num; i++)
if (num%i ===0) return false
return num+1
}

const getNumbers =(num)=>{
    const odd = { backgroundColor: 'red' }
    const even = { backgroundColor: 'yellow' }
    const prime = { backgroundColor: 'green' }

    if (num % 2 === 0){
    return even;
}else{ if (isPrime(num)){
    return prime
  }  else {
        return odd
    }

}
}
const colorfulNumbers=()=>(
<div><h2>
    {numbers.map((number)=><span key={number} style= {getNumbers(number)}>
        {number}
    </span>) }
    </h2></div>
)
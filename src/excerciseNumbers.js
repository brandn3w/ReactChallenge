import React from 'react'



const arr = [1,2,3,4,5,6,7,8,9,10,11]

const numbers =(num)=>{
    const arr = [1,2,3,4,5,6,7,8,9,10,11]  
    const sqrt = Math.sqrt(num)
    let primes=[]
    let odd=[]
   let even=[]
    for (let i=0; i<arr.length; i++){
        if (num%i ===sqrt){
primes.push(num)
        }
        else if (i%2===0){
            even.push(num)
        }
        else if(i%2!==0){
            odd.push(num)
        }
    }    
}
console.log(numbers)

const ColorfulNumbers =()=>(
    <div>
     <h2>
          {arr.map((number)=><span
      key={number}
    style={ odd.includes(number)? {backgroundColor:'green'} :
     even.includes(number) ? {backgroundColor: 'yellow'} : {backgroundColor:'red'}}>
      {number}
   </span>  )}
   </h2>
    </div>
)


export default ColorfulNumbers;
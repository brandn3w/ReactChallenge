import React from 'react'



const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const isPrime = num => {
    for (let i = 2; i < num; i++)
        if (num % i === 0) return false;
    return num > 1;
}

const eveOdd = num => {
    const odd = { backgroundColor: 'red' }
    const even = { backgroundColor: 'yellow' }
    const prime = { backgroundColor: 'green' }

    if (num % 2 === 0) {
        return even
    } else {
        if (isPrime(num)) {
            return prime;
        }
        else {
            return odd;
        }

    }

}

const ColorfulNumbers = () => (
    <div>
        <h1>
            {numbers.map((number) => <span
            key={number}
            style={eveOdd(number)}>{number}</span>)}
        </h1>
    </div>
)

export default ColorfulNumbers;


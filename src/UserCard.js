import React from 'react';
import ReactDOM from 'react-dom';
import Image from './images/10512dragon_figure.jpg'


const firstName = 'Asabeneh'
const lastName = 'Yetayeh'
const subtitle = 'Java Developer'
const techs = ['HTML', 'CSS', 'JavaScript', '.net', 'java', 'C++']
const techsFormatted = techs.map((tech) => <span key={tech}>{tech}</span>)

const UserCard =()=>(
<div>
    < img src= {Image} alt='dragon' />
  <h1>{firstName}{lastName}</h1>
  <h2>{subtitle}</h2>
<ul>
    {techsFormatted}
</ul>
</div>
)

export default UserCard;
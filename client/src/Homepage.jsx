import React from 'react'
import { Link } from 'react-router-dom'
import LoadCarData from './CarIndex'
import Footer from './Footer'


function HomePage(props) {
  return (
    <div>
    <h1 className= 'Hph1'>Welcome to Traffic Jam!</h1>
       <ul>
      <li className='Hpli'>Traffiv Jam the Game</li>
  
      <li className='Hpli'><Link to={'/CarIndex'}>Check out some Cool cars</Link></li>
       </ul>
      
    </div>
  )
}
export default HomePage
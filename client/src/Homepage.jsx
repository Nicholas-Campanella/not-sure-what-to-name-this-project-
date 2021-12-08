import React from 'react'
import { Link } from 'react-router-dom'
import LoadCarData from './CarIndex'


function HomePage(props) {
  return (
    <div>
    <h1 className= 'Hph1'>Welcome to Traffic Jam!</h1>

      <p className='Hpp'>Traffiv Jam the Game</p>
  
      <Link to={'/CarIndex'}><p className='Hpp'>Check out some Cool cars</p></Link>

    </div>
  )
}
export default HomePage
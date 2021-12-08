import React from 'react'
import { Link } from 'react-router-dom'
import LoadCarData from './CarIndex'


function HomePage(props) {
  return (
    <div>
    <h1>Welcome to Traffic Jam!</h1>

      <p>Traffiv Jam the Game</p>
  
      <Link to={<LoadCarData/>}><p>Check out some Cool cars</p></Link>

    </div>
  )
}
export default HomePage
import React from 'react'
import Link from 'react-router-dom'
import LoadCarData from './carIndex'

function HomePage() {
  return (
    <div>
    <h1>Welcome to Traffic Jam!</h1>

      <p>Traffiv Jam the Game</p>
  
      <p> <Route path='/carIndex.jsx' elements={<LoadCarData/>}/>Check out some Cool cars</p>

    </div>
  )
}
export default HomePage
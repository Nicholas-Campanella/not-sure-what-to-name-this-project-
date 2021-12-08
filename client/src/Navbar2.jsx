import React from 'react'
import { Link } from 'react-router-dom'
import HomePage from './HomePage'

function Navbar2() {
  return(
    <header>
      
      <nav>
        <h1>Traffic Jam Car Index</h1>
          <ul>
            <li>Traffic Jam the Game </li>
            <li><Link to={'/'}>Home</Link></li>
      </ul>
      </nav>
    </header>
  )
}

export default Navbar2
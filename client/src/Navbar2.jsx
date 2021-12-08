import React from 'react'
import { Link } from 'react-router-dom'


function Navbar2() {
  return(
    <header>
      
      <nav>
        <h1 className='navBarH1'>Traffic Jam Car Index</h1>
          <ul>
            {/* <li className='Hpli'><Link to={'/'}>Traffic Jam the Game</Link> </li> */}
            <li className='Hpli'><Link to={'/'}>Home</Link></li>
      </ul>
      </nav>
    </header>
  )
}

export default Navbar2
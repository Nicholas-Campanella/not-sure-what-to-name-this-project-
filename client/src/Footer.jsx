
import React from 'react'
import {Link} from 'react-router-dom'

function Footer (){
 
    return(
      <div className='footerDiv'>
      <ul className='footerUL'>
        <li className='footerLI'><Link to='https://github.com/Nicholas-Campanella'>Git Hub</Link></li>
        <li className='footerLI'><Link to='https://www.linkedin.com/in/nicholas-campanella1996/'>LinkedIn</Link></li>
      </ul>
      </div>
    )
  }
  

export default Footer;
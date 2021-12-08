
import React from 'react'
import {Link} from 'react-router-dom'

function Footer (){
 
    return(
      <div className='footerDiv'>
      
        <Link to='https://github.com/Nicholas-Campanella'><img className='footerLI' src='https://i.imgur.com/iQ359Ik.png?1'/></Link>
        <Link to='https://www.linkedin.com/in/nicholas-campanella1996/'><img className='footerLI' src='https://i.imgur.com/yIpQIO0.png?1'/></Link>
     
      </div>
    )
  }
  

export default Footer;
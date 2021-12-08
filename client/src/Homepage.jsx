import React from 'react'
import { Link } from 'react-router-dom'



function HomePage(props) {
  return (
    <div>
    <h1 className= 'Hph1'>Welcome to Traffic Jam!</h1>
       <ul>
      <li className='Hpli'>Traffic Jam Game!</li>
  
      <li className='Hpli'><Link to={'/CarIndex'}>Look at Cool Cars</Link></li>
       </ul>
      
    </div>
  )
}
export default HomePage
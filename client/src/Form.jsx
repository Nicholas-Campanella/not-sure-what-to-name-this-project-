import React from 'react'
import { useEffect, useState } from 'react'

// function InputCar() {
//   const [input, setInput] = useState('')
//   useEffect(() => {
    
//   })
// }

function Form() {
  return (
    <div>
      <h4>Upload a car to the Index</h4>
    <form className='carInput'>
      <input className='Input' type='text' placeholder='Make'/>
      <input className='Input' type='text' placeholder='Model'/>
      <input className='Input' type='text' placeholder='Year'/>
      {/* <input type="text" placeholer='Status'/> */}
      <input className='Input' type='url' placeholder= 'Image URL'/>
      <button className='Button'>Upload</button>
      </form>
      </div> 
  );
}

export default Form
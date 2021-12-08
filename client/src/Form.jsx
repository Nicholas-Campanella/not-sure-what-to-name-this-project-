import React from 'react'
import { useEffect, useState } from 'react'

function InputCar() {
  const [input, setInput] = useState('')
  useEffect(() => {
    
  })
}

function Form() {
  return (
    <form>
      <input type='text' placeholder='Make'/>
      <input type='text' placeholder='Model'/>
      <input type='text' placeholder='Year'/>
      {/* <input type="text" placeholer='Status'/> */}
      <input type='url' placeholder= 'Image'/>
      <button>Upload</button>
    </form>
  );
}

export default Form
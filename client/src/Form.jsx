import React from 'react'
import { useEffect, useState } from 'react'

function InputCar() {
  const [input, setInput] = useState('')
  useEffect(() => {
    
  })
}

function AddCarData() {
  return (
    <form>
      <input type='text' placeholder='Make'/>
      <input type='text' placeholder='Model'/>
      <input type='text' placeholder='Year'/>
      <input type="text" placeholer='Status'/>
      <input type='image' placeholder='Image'/>
      <button>Upload</button>
    </form>
  );
}

export default AddCarData
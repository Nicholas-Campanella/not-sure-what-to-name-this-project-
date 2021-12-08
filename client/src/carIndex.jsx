import React from 'react'

import { useState, useEffect } from 'react'
import Form from './Form.jsx'
import { Link } from 'react-router-dom'
import Navbar2 from './Navbar2.jsx'
import Footer from './Footer.jsx'


function CarIndex ({cars}){

  return (
      
     
      
        <div className='carForm'>
          <Navbar2/>
          {cars.map((car) => (
          <div className='carCard'>
            <h5 className='carMakeAnModel'>{car.fields.make} {car.fields.model}</h5>

            <img className='carImg'
              src={car.fields.image} />
  
             <h3 className='year'>{car.fields.year}</h3>
          </div>
          ))}
        
        <Form />
        
    </div>
    )}


export default CarIndex
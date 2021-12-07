import React from 'react'
import fetchData from './App.js'
import { useState } from 'react'

// function BringInCarData(props) {
//   const [CarCard, setCarCard]= useState([])  
// }

function LoadCarData (props){

    return (
      <div>
        <h2 classname='carMakeAnModel'>{props.fields.make} {props.fields.model}</h2>

        <img classname='carImg'
          src={props.image[`0`].thumbnails.small}
        />

        <h3 classname='year'>{props.fields.year}</h3>
      </div>
    )
  }


export default LoadCarData
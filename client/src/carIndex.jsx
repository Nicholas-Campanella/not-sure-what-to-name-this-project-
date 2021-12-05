import React from 'react'

function loadCarData(props) {
  return (
    <h2 classname='carMakeAnModel'>{props.make} {props.model}</h2>
    <div classname='carImg'>{props.image}</div>
    <h3 classname='year'>{props.year}</h3>
  )
}

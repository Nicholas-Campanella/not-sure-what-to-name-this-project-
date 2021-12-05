import React from 'react'

class LoadCarData extends React.Component {
  
  render() {
    return (
      <div>
        <h2 classname='carMakeAnModel'>{props.make} {props.model}</h2>

        <img classname='carImg'
          src={props.image}
        />

        <h3 classname='year'>{props.year}</h3>
      </div>
    )
  }
}

export default LoadCarData
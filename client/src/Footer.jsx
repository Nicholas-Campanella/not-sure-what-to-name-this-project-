import { render } from "@testing-library/react";
import React from 'react'

class Footer extends React.Component{
  render() {
    return(
      <div>
      <ul>
        <li>Git Hub</li>
        <li>LinkedIn</li>
      </ul>
      </div>
    )
  }
  
}
export default Footer;
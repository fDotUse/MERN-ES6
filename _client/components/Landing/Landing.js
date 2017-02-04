import React from 'react'
import { Link } from 'react-router'

// CSS
import './Landing.css'

class Landing extends React.Component {
  render () {
    return (
      <div id='Landing'>
        <h1>
          <Link to='/main'>Boiler MERN-ES6 ?</Link>
        </h1>
      </div>
    )
  }
}

export default Landing

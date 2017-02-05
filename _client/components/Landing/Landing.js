import React from 'react'
import { Link } from 'react-router'
// CSS
import './Landing.css'

class Landing extends React.Component {
  render () {
    return (
      <div id='Landing'>
        <div className='row center-xs logos-container'>
          <h1 className='col-xs-12'>A Light Mongo - Express/Node - React BoilerPlate</h1>
          <div>
            <div className='logo-img-container'>
              <img className='logo-img' src='/dist/assets/img/mongo-logo.png' />
            </div>
            <div className='logo-img-container'>
              <img className='logo-img' src='/dist/assets/img/react-logo.svg' />
            </div>
            <div className='logo-img-container'>
              <img className='logo-img' src='/dist/assets/img/node-logo.png' />
            </div>
            <span>Powered by</span>
            <div className='powered-img-container'>
              <img className='powered-img' src='/dist/assets/img/webpack-logo.svg' />
            </div>
          </div>
        </div>
        <div className='row center-xs'>
          <div className='powered-img-container col-xs-12'>
            <a href='https://github.com/fDotUse/MERN-ES6'>
              <img className='powered-img' src='/dist/assets/img/github.svg' />
            </a>
          </div>
          <p>Created by Sergio Martin (f.use)</p>
        </div>
        <div className='row center-xs'>
          <Link to='/main'>Test Route</Link>
        </div>

      </div>
    )
  }
}

export default Landing

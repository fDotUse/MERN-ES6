// Css dependencies
import 'normalize.css'

// React dependencies
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'

// Components
import Landing from './components/Landing'
import Main from './components/Main'

const App = React.createClass({
  render () {
    return (
      <div className='app'>
        <Router history={browserHistory}>
          <Route path='/' component={Landing} />
          <Route path='/main' component={Main} />
        </Router>
      </div>
    )
  }
})

render(<App />, document.getElementById('app'))

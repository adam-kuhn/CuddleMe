import React from 'react'
import {Route} from 'react-router-dom'

import Landing from './Landing'
import Profile from './Profile'
import Register from './Register'

const App = () => {
  return (
    <div>
      <h2>React and Redux development is ready to GOOOO!</h2>
      <Route exact path='/' component={Landing} />
      <Route path='/profile/:username' component={Profile} />
      <Route path='/register' component={Register} />
    </div>
  )
}

export default App

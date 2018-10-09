import React from 'react'
import {Route} from 'react-router-dom'

import Landing from './Landing/Landing'
import Profile from './Landing/Members/Profile/Profile'
import Register from './Landing/Non-Members/Register/Register'
import MemberWelcome from './Landing/Members/MemberWelcome'
import CuddleSearch from './Landing/Members/CuddleSearch/CuddleSearch'

const App = () => {
  return (
    <div>
      <Route exact path='/' component={Landing} />
      <Route path='/members-only/:username' component={MemberWelcome} />
      <Route path='/profile/:username' component={Profile} />
      <Route path='/cuddle-search/:username' component={CuddleSearch} />
      <Route path='/register' component={Register} />
    </div>
  )
}

export default App

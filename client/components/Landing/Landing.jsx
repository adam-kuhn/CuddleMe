import React from 'react'
import {Link} from 'react-router-dom'

class Landing extends React.Component {
  render () {
    return (
      <div>
        <p>Already a member:</p>
        <Link to='/members-only/:username'>Login</Link>
        <p>Join us:</p>
        <Link to='/register'>Register</Link>
      </div>
    )
  }
}

export default Landing

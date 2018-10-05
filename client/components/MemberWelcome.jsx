import React from 'react'
import {Link} from 'react-router-dom'

const MemberWelcome = () => {
  return (
    <div>
      <Link to='/profile/:username'>Edit Profile</Link>
      <p>Browse cuddle buddies</p>
    </div>
  )
}

export default MemberWelcome

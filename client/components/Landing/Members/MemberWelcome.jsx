import React from 'react'
import {Link} from 'react-router-dom'
const MemberWelcome = () => {
  return (
    <div>
      <Link to='/profile/:username'>Edit Profile</Link>
      <Link to='/cuddle-search/:username'>Browse cuddle buddies</Link >
    </div>
  )
}

export default MemberWelcome

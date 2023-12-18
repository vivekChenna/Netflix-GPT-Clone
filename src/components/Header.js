import React from 'react'
import NetflixLogo from '../constants/images/Netflix_Logo_PMS.png'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className=' absolute bg-gradient-to-b from-black w-full z-10'>
      <Link to="/">
      <img src={NetflixLogo} alt='netflix-logo' className=' w-56 px-3 py-3' />
      </Link>
    </div>
  )
}

export default Header

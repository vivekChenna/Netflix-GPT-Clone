import React , { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import NetflixLogo from '../constants/images/Netflix_Logo_PMS.png'
import { Link, useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { auth } from '../utils/firebase'

const Header = () => {

  const navigate = useNavigate()
  const user = useSelector((store) => store.user)

  const [showSignOut, setShowSignOut] = useState(false)

  const SignOutHandler = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate('/')
    }).catch((error) => {
      // An error happened.
    })
  }
  return (
    <div className=' absolute bg-gradient-to-b from-black w-full z-10 flex justify-between'>
      <Link to='/'>
      <img src={NetflixLogo} alt='netflix-logo' className=' w-56 px-3 py-3' />
      </Link>
      {user && <div className=' p-8 flex flex-col items-center cursor-pointer gap-2'>
                                            {<div className=' flex'> <p className=' text-lg font-semibold'>{`Hye , ${user.displayName}`}</p> <img src={user.photoURL}alt='user-logo' className=' w-8' onClick={() => setShowSignOut(!showSignOut)} /></div>}   {showSignOut && <button className=' text-white font-semibold text-lg' onClick={SignOutHandler}>
                                                                                                                          Sign Out
                                                                                                                        </button>}
                                            </div>}
    </div>
  )
}

export default Header

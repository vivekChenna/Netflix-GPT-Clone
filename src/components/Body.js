import React, { useEffect } from 'react'
import { useDispatch  } from 'react-redux'
import Login from './Login'
import Browse from './Browse'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { auth } from '../utils/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { AddUser, RemoveUser } from '../redux/userSlice'

const Body = () => {

  
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid, displayName, email , photoURL} = user
        console.log(user);
        console.log(uid , displayName , email);
        dispatch(AddUser({uid: uid,  email: email,  displayName: displayName , photoURL: photoURL}))
        console.log('on auth state change is called');
      } else {
        // User is signed out
        // ...
        dispatch(RemoveUser())
      }
    })
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/browse' element={<Browse/>} />
        <Route path='/' element={<Login/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default Body

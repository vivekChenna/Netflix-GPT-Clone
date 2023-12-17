import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true)

  return (
    <div>
      <Header/>
      <div className=' absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/ca6a7616-0acb-4bc5-be25-c4deef0419a7/c5af601a-6657-4531-8f82-22e629a3795e/IN-en-20231211-popsignuptwoweeks-perspective_alpha_website_large.jpg'
          alt='bg-img' />
      </div>
      <form className=' absolute max-w-md h-3/4 my-28 left-0 right-0 mx-auto px-16 pt-10 flex flex-col gap-6 bg-black bg-opacity-80'>
        <p className=' text-white font-semibold text-3xl'>
          {isSignInForm ? 'Sign In' : 'Sign Up'}
        </p>
        <div className=' flex gap-4 flex-col'>
          {isSignInForm ? null : <input type='text' placeholder='Full Name' className='py-3 pl-3 bg-zinc-700 rounded-md outline-none text-white' />}
          <input type="email" placeholder='Email or phone number' className=' py-3 pl-3 bg-zinc-700 rounded-md outline-none text-white' />
          <input type='password' placeholder='Password' className=' pl-3 py-3 bg-zinc-700 rounded-md outline-none text-white' />
        </div>
        <button className=' bg-red-600 py-3 text-white rounded-md'>
          {isSignInForm ? 'Sign In' : 'Sign Up'}
        </button>
        <p className=' text-zinc-400'>
         {isSignInForm? 'New to Netflix?' : "Already Registered?"} <span onClick={() => setIsSignInForm(!isSignInForm)} className=' text-white cursor-pointer'>{isSignInForm ? 'Sign up Now.' : "Sign In Now."}</span>
        </p>
      </form>
    </div>
  )
}

export default Login

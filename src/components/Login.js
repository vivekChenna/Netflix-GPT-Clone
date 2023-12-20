import { useState , useRef } from 'react'
import {useDispatch} from 'react-redux';
import { IoEye , IoEyeOff } from "react-icons/io5";
import Header from './Header'
import {validateFunc} from '../utils/validate';
import {createUserWithEmailAndPassword , signInWithEmailAndPassword, updateProfile} from 'firebase/auth';
import {auth} from '../utils/firebase';
import { AddUser } from '../redux/userSlice';

const Login = () => {

  const dispatch = useDispatch();

  const [isSignInForm, setIsSignInForm] = useState(true)
  const [showPassword , setShowPassword] = useState(false);
  const [showErrorMessage , setShowErrorMessage] = useState('');


  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);


  const HandleSubmitClick = ()=>{

   const msg = validateFunc(email.current.value , password.current.value);
    setShowErrorMessage(msg);

    // if any msg occurs that means something went wrong so we are returning
    if(msg) return ;
    // otherwise Sign Up or Sign In the user

    console.log(auth);

    if(!isSignInForm){
      // Sign Up logic implementation
       createUserWithEmailAndPassword(auth , email.current.value , password.current.value).then((userCredential)=>{
        // Signed up
        console.log('printing info of auth');
        console.log(auth);
        const user = userCredential.user;
        updateProfile(user, {
          displayName: name.current.value, photoURL: "https://avatars.githubusercontent.com/u/99558167?v=4"
        }).then(() => {
          const {uid, displayName, email , photoURL} = auth.currentUser;
          dispatch(AddUser({uid: uid,  email: email,  displayName: displayName , photoURL: photoURL}))
    
          // Profile updated!
          // ...
        }).catch((error) => {
          // An error occurred
          // ...
        });

      }).catch((error)=>{
        const errorCode = error.code;
        const errorMessage = error.message;
        if(errorCode==='auth/email-already-in-use'){
          console.log('hello');
          setShowErrorMessage('Email Already Registered');
        }
        else{
          setShowErrorMessage(errorCode+'-'+errorMessage);
        }
      })
    }else{

      signInWithEmailAndPassword(auth , email.current.value , password.current.value).then((userCredential)=>{
        // Signed In
        console.log('we are in the sign in function');
        const user = userCredential.user;
        console.log(user);
      }).catch((error)=>{
        const errorCode = error.code;
        const errorMessage = error.message;

        if(errorCode ==='auth/invalid-credential'){
          setShowErrorMessage('Invalid Email or Password');
        }
        else{
          setShowErrorMessage(errorCode+'-'+errorMessage);
        }
      })
    }
  }

  return (
    <div>
      <Header/>
      <div className=' absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/ca6a7616-0acb-4bc5-be25-c4deef0419a7/c5af601a-6657-4531-8f82-22e629a3795e/IN-en-20231211-popsignuptwoweeks-perspective_alpha_website_large.jpg'
          alt='bg-img' />
      </div>
      <form className=' absolute max-w-md h-3/4 my-28 left-0 right-0 mx-auto px-16 pt-10 flex flex-col gap-6 bg-black bg-opacity-80' onClick={(e)=> e.preventDefault()}>
        <p className=' text-white font-semibold text-4xl'>
          {isSignInForm ? 'Sign In' : 'Sign Up'}
        </p>
        <div className=' flex gap-5 flex-col'>
          {isSignInForm ? null : <input type='text' placeholder='Full Name' className='py-3 pl-3 bg-zinc-700 rounded-md outline-none text-white' ref={name} />}
          <input ref={email} type="email" placeholder='Email Address' className=' py-3 pl-3 bg-zinc-700 rounded-md outline-none text-white' />
          <div className=' flex items-center bg-zinc-700 justify-between rounded-md pr-2'>
          <input ref={password} type={showPassword ? 'text':'password'} placeholder='Password' className=' pl-3 py-3 bg-zinc-700 rounded-md outline-none text-white' />
          {

         showPassword ?  <IoEyeOff color='gray' fontSize="1.4rem" cursor='pointer' onClick={()=> setShowPassword(!showPassword) }/>:
         <IoEye color='gray' fontSize="1.4rem" cursor='pointer' onClick={()=> setShowPassword(!showPassword) }/>
          }
          </div>
          { showErrorMessage && <p className=' text-red-500'>{showErrorMessage}</p> }
        </div>
        <button className=' bg-red-600 py-3 text-white rounded-md' onClick={()=> HandleSubmitClick()}>
          {isSignInForm ? 'Sign In' : 'Sign Up'}
        </button>
        <p className=' text-zinc-400'>
         {isSignInForm? 'New to Netflix?' : "Already Registered?"} <span onClick={() => setIsSignInForm(!isSignInForm)} className=' text-white cursor-pointer'>{isSignInForm ? 'Sign up Now.' : "Sign In Now."}</span>
        </p>
      </form>
    </div>
  )
}

export default Login;

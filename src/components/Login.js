import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { IoEye, IoEyeOff } from "react-icons/io5";
import Header from "./Header";
import { validateFunc } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { AddUser } from "../redux/userSlice";
import { userAvatar, BG_IMG } from "../constants/constant";

const Login = () => {
  const dispatch = useDispatch();

  const [isSignInForm, setIsSignInForm] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState("");

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const HandleSubmitClick = () => {
    const msg = validateFunc(email.current.value, password.current.value);
    setShowErrorMessage(msg);

    // if any msg occurs that means something went wrong so we are returning
    if (msg) return;

    if (!isSignInForm) {
      // Sign Up logic implementation
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: userAvatar,
          })
            .then(() => {
              const { uid, displayName, email, photoURL } = auth.currentUser;
              dispatch(
                AddUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );

              // Profile updated!
              // ...
            })
            .catch((error) => {
              // An error occurred
              // ...
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          if (errorCode === "auth/email-already-in-use") {
            setShowErrorMessage("Email Already Registered");
          } else {
            setShowErrorMessage(errorCode + "-" + errorMessage);
          }
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed In

          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          if (errorCode === "auth/invalid-credential") {
            setShowErrorMessage("Invalid Email or Password");
          } else {
            setShowErrorMessage(errorCode + "-" + errorMessage);
          }
        });
    }
  };

  return (
    <div className="">
      <div className=" absolute">
        <img
          src={BG_IMG}
          alt="bg-img"
          className=" h-screen object-cover md:h-full md:object-cover"
        />
      </div>
      <Header />
      <form
        className=" absolute max-w-sm h-3/4 mt-20 left-0 right-0 mx-auto px-16 pt-10 flex flex-col gap-6 bg-black bg-opacity-80 md:max-w-md md:mt-28"
        onClick={(e) => e.preventDefault()}
      >
        <p className=" text-white font-semibold text-2xl md:text-4xl">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </p>
        <div className=" flex gap-5 flex-col">
          {isSignInForm ? null : (
            <input
              type="text"
              placeholder="Full Name"
              className="py-3 pl-3 bg-zinc-700 rounded-md outline-none text-white text-sm md:text-lg"
              ref={name}
            />
          )}
          <input
            ref={email}
            type="email"
            placeholder="Email Address"
            className=" bg-zinc-700 rounded-md outline-none text-white py-2 pl-2 md:py-3 md:pl-3 md:text-lg"
          />
          <div className=" flex items-center bg-zinc-700 justify-between rounded-md pr-2">
            <input
              ref={password}
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="bg-zinc-700 rounded-md outline-none text-sm text-white py-2 pl-2 md:py-3 md:pl-3 md:text-lg"
            />
            {showPassword ? (
              <IoEyeOff
                color="gray"
                fontSize="1.4rem"
                cursor="pointer"
                onClick={() => setShowPassword(!showPassword)}
              />
            ) : (
              <IoEye
                color="gray"
                fontSize="1rem"
                className=" text-lg md:text-2xl"
                cursor="pointer"
                onClick={() => setShowPassword(!showPassword)}
              />
            )}
          </div>
          {showErrorMessage && (
            <p className=" text-red-500">{showErrorMessage}</p>
          )}
        </div>
        <button
          className=" bg-red-600 text-white text-sm rounded-md py-2 pl-2 md:py-3 md:pl-3 md:text-lg"
          onClick={() => HandleSubmitClick()}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className=" text-zinc-400">
          {isSignInForm ? "New to Netflix?" : "Already Registered?"}{" "}
          <span
            onClick={() => setIsSignInForm(!isSignInForm)}
            className=" text-white cursor-pointer"
          >
            {isSignInForm ? "Sign up Now." : "Sign In Now."}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;

import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import NetflixLogo from "../constants/images/Netflix_Logo_PMS.png";
import { Link, useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { AddUser, RemoveUser } from "../redux/userSlice";
import { toggleGPT } from "../redux/gptSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const [showSignOut, setShowSignOut] = useState(false);
  const dispatch = useDispatch();
  const showGPTPage = useSelector((store) => store.gpt.showGPTPage);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, email, photoURL } = user;
        console.log(user);
        console.log(uid, displayName, email);
        dispatch(
          AddUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        // ...
        dispatch(RemoveUser());
        navigate("/");
      }
    });

    // onAuthStateChanged Method gives us a unsubscribe method
    // we will remove the onAuthStateChanged whenever our component unmounts
    return () => unSubscribe();
  }, []);

  const SignOutHandler = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className=" absolute bg-gradient-to-b from-black w-full z-10 flex justify-between">
      <Link to="/">
        <img src={NetflixLogo} alt="netflix-logo" className=" w-56 px-3 py-3" />
      </Link>
      {user && (
        <div className="p-8 flex cursor-pointer gap-2">
          <button
            className=" text-white mr-6 w-fit bg-green-900 rounded-md font-semibold text-lg px-2"
            onClick={() => dispatch(toggleGPT())}
          >
            {showGPTPage ? "Watch Movie" : "GPT Search"}
          </button>
          <div>
            <div className=" flex items-center">
              <div className=" flex items-center">
                <p className=" text-xl font-semibold text-red-300">
                {user.displayName}
                </p>
                <img
                  src={user.photoURL}
                  alt="user-logo"
                  className=" w-10"
                  onClick={() => setShowSignOut(!showSignOut)}
                />
              </div>
              <div>
                {showSignOut && (
                  <button
                    className=" text-white font-semibold text-lg"
                    onClick={SignOutHandler}
                  >
                    Sign Out
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;

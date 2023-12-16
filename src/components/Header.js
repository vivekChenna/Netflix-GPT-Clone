import React from "react";
import NetflixLogo from '../constants/images/Netflix_Logo_PMS.png'

const Header = ()=>{
    return (
        <div className=" absolute bg-gradient-to-b from-black w-full z-10">
            <img src={NetflixLogo} alt="netflix-logo" className=" w-56 px-3 py-3" />
        </div>
    );
}

export default Header;
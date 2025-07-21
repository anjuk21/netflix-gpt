import React from 'react'
import {  signOut } from "firebase/auth";
import {auth} from "../utils/firebase";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const navigate=useNavigate();
  const user=useSelector((store)=>store.user)
  const handleSignOut=()=>{
    signOut(auth).then(() => {
  // Sign-out successful.
  navigate("/");
}).catch((error) => {
  // An error happened.
  navigate("/error");
});
  }
  return (
    <div className='absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
     <img className='w-40'
     src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
      alt="logo" />
      {user && (
       <div className='flex'>
        <img className='w-12 h-12 ' alt=" usericon" src={user?.photoURL}/>
        <button onClick={handleSignOut} className='font-bold text-white'>(sign out)</button>
      </div>
    
      ) }
      </div>
  );
};

export default Header;

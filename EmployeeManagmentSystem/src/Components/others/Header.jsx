import React from 'react';

const Header = (props) => {

 

  const logOutUser = () => {
    localStorage.setItem('loggedInUser','') 
    props.changeUser('')// Clear the user data in localStorage
    // window.location.reload();  // Reload the page after logging out
  };

  return (
    <div className='flex items-end justify-between text-white'>
      <h1 className='text-2xl font-medium'>
        Hello <br />
        <span className='text-3xl font-semibold'>{props.name}😊</span>
      </h1>
      <button
        onClick={logOutUser}
        className='bg-[#CAD2C5] hover:bg-[#e0e9db] text-emerald-800 font-bold rounded-md py-2 px-5'>
        Log Out
      </button>
    </div>
  );
};

export default Header;

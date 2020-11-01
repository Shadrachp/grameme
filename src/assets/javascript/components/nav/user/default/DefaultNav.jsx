import React from 'react';
import LoginButton from './LoginButton';
import SignupButton from './SignupButton';

const DefaultNav = () => {

  return (
    <>
      <li id="log-in">
        <LoginButton/>
      </li>
      <li id="sign-up">
        <SignupButton/>
      </li>
    </>
  );


}

export default DefaultNav;

import React, { useState } from 'react';
import Button from './Button';

const DefaultNav = (props) => {


  return (
    <>
      <li onClick={() => props.show()} id="log-in">
        <Button  text="Log In"/>
      </li>
      <li onClick={() => props.show()} id="sign-up">
        <Button  text="Sign Up"/>
      </li>


    </>
  );

}

export default DefaultNav;

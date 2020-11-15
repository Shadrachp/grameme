import React, { useState } from 'react';
import Button from './Button';

const DefaultNav = (props) => {


  return (
    <>
      <li onClick={() => props.show()}
          id="log-in"
          className="btn">
        <Button  text="Log In"/>
      </li>
      <li onClick={() => props.show()}
          id="sign-up"
          className="btn">
        <Button  text="Sign Up"/>
      </li>


    </>
  );

}

export default DefaultNav;

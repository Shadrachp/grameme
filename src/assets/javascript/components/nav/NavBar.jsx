import React, { Component } from 'react';
import '../../../stylesheets/NavBar.css';

class NavBar extends Component {
  constructor( props ) {
    super( props );

    this.state = {

    }
  }

  render() {
    return (
      <>
        <ul className="nav-container">
          <div className="flex-left">
            <li className="logo">
              Grameme
            </li>
          </div>
          <div className="flex">
            <li>
              
            </li>
            <li>
              Log in
            </li>
            <li>
              Sign up
            </li>
          </div>
        </ul>
      </>
    );
  }
}

export default NavBar;

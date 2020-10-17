import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  constructor( props ) {
    super( props );

    this.state = {

    }
  }

  render() {
    return (
      <div className="nav">
        <ul className="nav-container">
          <div className="flex-left">
            <li>
              <Link className="logo" to="/">Grameme</Link>
            </li>
          </div>
          <div className="flex">
            <li>

            </li>
            <li>
              Log in
            </li>
            <li id="sign-up">
              Sign up
            </li>
         </div>
        </ul>
      </div>
    );
  }
}

export default NavBar;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavAuth from './user/NavAuth';


class NavBar extends Component {
  constructor( props ) {
    super( props );


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
            <NavAuth show={this.props.show}/>
         </div>
        </ul>
      </div>
    );
  }
}

export default NavBar;

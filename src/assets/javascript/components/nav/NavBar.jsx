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
      <div>
        <ul>
          <li className="flex">
            Home (Logo)
          </li>
          <li className="flex">
            2
          </li>
          <li className="flex">
            3
          </li>
          <li className="flex">
            4
          </li>
        </ul>
      </div>
    );
  }
}

export default NavBar;

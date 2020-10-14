import React, { Component } from 'react';
import "../../../stylesheets/home.css";

class Home extends Component {
  constructor(props) {
    super( props );

    this.state = ({
      title: props.title,
    });
  }

  render() {
    return(
      <div>
        <h1> Home </h1>
      </div>
    );
  }
}

export default Home;

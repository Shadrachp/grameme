import React, { Component } from 'react';
import NavBar from './nav/NavBar';
import Home from './home/Home';

class Main extends Component {
  constructor( props ) {
    super( props );

    this.state = ({
      title: this.props.title,
    })
  }



  render() {

    return (
      <div>
        <NavBar title={ this.state.title }/>
        <Home title={ this.state.title }/>
      </div>
    );
  }
}

export default Main;

import React, { Component } from 'react';
import {Route, Link, Switch, BrowserRouter as Router} from 'react-router-dom';
import '../stylesheets/App.css';
import NavBar from './components/nav/NavBar';
import Home from './components/home/Home';
import Profile from './components/profile/Profile';

class App extends Component {
  constructor( props ) {
    super( props );

    this.state = ({
      title: 'Grameme',
    });
  }

  render() {

    return (
      <Router>
          <title>{this.state.title}</title>
          <div className="container">
            <NavBar title={ this.state.title }/>
            <Route exact path="/" component={ Home }/>
            <Route exact path="/profile" component={ Profile }/>
          </div>
      </Router>
    );
  }
}

export default App;

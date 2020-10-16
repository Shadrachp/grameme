import React, { Component } from 'react';
import {Route, Link, Switch, BrowserRouter as Router} from 'react-router-dom';
import config from '../../config/config';
import '../stylesheets/App.css';
import NavBar from './components/nav/NavBar';
import Home from './components/home/Home';
import Profile from './components/profile/Profile';

class App extends Component {
  constructor( props ) {
    super( props );

    this.state = ({
      title: 'Grameme',
      cloudName: config.cloud_name,
      uploadPreset: config.upload_preset
    });

    // this.props.history.push({
    //   pathname: '/Profile',
    //   cloudName: cloud_name,
    //   uploadPreset: upload_preset, // your data array of objects
    // });
  }

  render() {
    return (
      <Router>
          <title>{this.state.title}</title>
          <div className="container">
            <NavBar title={ this.state.title }/>
            <Route exact path="/" render={()=>(
                <Home {...this.state} />
              )}
             />
            <Route exact path="/profile" render={() => (
                <Profile cloudName={this.state.cloudName} uploadPreset={this.state.uploadPreset}/>
              )}
            />
          </div>
      </Router>
    );
  }
}

export default App;

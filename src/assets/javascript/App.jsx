import React from 'react';
import {Route, Link, Switch, BrowserRouter as Router} from 'react-router-dom';
import config from '../../config/config';
import NavBar from './components/nav/NavBar';
import Home from './components/home/Home';
import Profile from './components/profile/Profile';



const App = () => {
  const title = "Grameme";
  const cloudinary_config =  {
                              cloudName: config.cloud_name,
                              uploadPreset: config.upload_preset
                             };


    // this.props.history.push({
    //   pathname: '/Profile',
    //   cloudName: cloud_name,
    //   uploadPreset: upload_preset, // your data array of objects
    // });


  return (
      <Router>
          <title>{ title }</title>
          <div className="container">
            <NavBar title={ title }/>
            <Route
              exact path="/"
              render={()=>(
                <Home
                  {...cloudinary_config}
                />
              )}
             />
            <Route exact path="/profile" render={() => (
                <Profile
                  {...cloudinary_config}
                />
              )}
            />
          </div>
      </Router>
  );
}

export default App;

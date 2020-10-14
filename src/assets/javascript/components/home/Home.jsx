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
      <div className="home-container">
        <div></div>
        <div className="feed">
          <div className="wrapper">
            <div className="content">
                <img src="https://img-9gag-fun.9cache.com/photo/aqnprzv_460s.jpg"/>
            </div>
            <div className="content">
                <img src="https://img-9gag-fun.9cache.com/photo/aqnprzv_460s.jpg"/>
            </div>

          </div>
        </div>
        <div></div>
      </div>
    );
  }
}

export default Home;

import React, { Component } from 'react';
import axios from 'axios';
import {Image, Transformation, CloudinaryContext} from 'cloudinary-react';
import Extras from './Extras';

class Home extends Component {
  constructor(props) {
    super( props );

    this.state = {
      posts: []
    }
  }

  componentDidMount() {
      axios.get(`http://localhost:3001/posts`)
        .then(res => {
          const posts = res.data;
          this.setState({posts});
        });
  }

  render() {
    return(
      <CloudinaryContext
        cloudName={this.props.cloudName}
        uploadPreset={this.props.uploadPreset}
      >
        <div className="home-container">
          <div className="feed">
            <div className="wrapper">
              {this.state.posts.map((post, index) =>
                <div key={index} className="content">
                  <Image className="content-image"
                    src={post.img_link}
                  />
                  <Extras/>
                </div>
              )}
            </div>
          </div>
        </div>
      </CloudinaryContext>
    );
  }
}

export default Home;

import React, { Component } from 'react';
import {Image, Transformation, CloudinaryContext} from 'cloudinary-react';
import Extras from './Extras'

class Home extends Component {
  constructor(props) {
    super( props );

    this.state = {
      
    }
  }

  render() {
    return(
      <CloudinaryContext
        cloudName={this.props.cloudName}
        uploadPreset={this.props.uploadPreset}
      >
        <div className="home-container">
          <div></div>
          <div className="feed">
            <div className="wrapper">
              <div className="content">
                <Image className="content-image"
                  src="https://res.cloudinary.com/dk19dzivc/image/upload/v1602716213/samples/ecommerce/accessories-bag.jpg"
                />
                <Extras/>
              </div>
              <div className="content">
                <Image className="content-image"
                  publicId="https://res.cloudinary.com/dk19dzivc/image/upload/v1602853429/grameme/paa1wgdwiolpmhxi9fsz.jpg"
                />
                <Extras/>
              </div>
              <div className="content">
                <Image className="content-image"
                  publicId="https://res.cloudinary.com/dk19dzivc/image/upload/v1602853493/grameme/rczub12eexn6apto74xb.jpg"
                />
                <Extras/>
              </div>
              <div className="content">
                <Image className="content-image"
                  publicId="https://res.cloudinary.com/dk19dzivc/image/upload/v1602853785/grameme/lqbcjdqsdwxmzjt0rnan.jpg"
                />
                <Extras/>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </CloudinaryContext>
    );
  }
}

export default Home;

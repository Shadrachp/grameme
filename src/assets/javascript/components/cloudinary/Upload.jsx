import React, { Component } from 'react';
import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';

class Upload extends Component {
  constructor(props) {
    super( props );


  }


  render() {
    return (
      <div>
        <CloudinaryContext
          cloudName={this.props.cloudName}
          uploadPreset={this.props.uploadPreset}
          >
          <div>
            <Image
              publicId="https://res.cloudinary.com/dk19dzivc/image/upload/v1602716213/samples/ecommerce/accessories-bag.jpg"
              width="200"
              crop="scale" />
          </div>
        </CloudinaryContext>
      </div>
    );
  }
}

export default Upload;

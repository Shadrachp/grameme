import React, { Component } from 'react';
import Upload from '../cloudinary/Upload'

class Profile extends Component {
  constructor(props) {
    super( props );
  }

  render() {
    console.log(this.props.cloudName)
    return(
      <>
          <h1>
            My Profile
          </h1>

          <Upload
            cloudName={this.props.cloudName}
            uploadPreset={this.props.cloudName}
          />
      </>
    );
  }
}

export default Profile;

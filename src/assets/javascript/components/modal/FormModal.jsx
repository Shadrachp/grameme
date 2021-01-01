import React, { useState } from 'react';
import "../../../../assets/stylesheets/modal.scss";

const FormModal = (props) => {
  const [clearPlaceholder, setClearPlaceholder] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


  const userForm = () => {
    if(username.length === 0)
      return false;
    return true
  };

  const handleChange = (e) => {
    setUsername = e.target.value;
    console.log(username);
  };

  return (

      <div className="modal-container"
      // onClick={()=>{props.close()}}
      style = {{display: (props.show ? 'flex' : 'none')}}>
        <div className="modal-header">
          <div onClick={props.close} className="close-button-container">
            ✖
          </div>
        </div>
        <div className="modal-body">
            <div className="modal-body-tabs">
                <div>Login</div>
                <div>Sign Up</div>
            </div>
            <div className="modal-body-input">
              <div className="modal-input-email">
                <label>Email</label>
                <input type="email" />
              </div>
              <div className="modal-input-email">
                <label>Password</label>
                <input type="password"/>
              </div>
            </div>
            <div className="modal-body-extras">
              <div className="modal-submit">
                <div>Login</div>
              </div>
            </div>
        </div>
        <div className="modal-footer">

            <div>test3</div>
        </div>
      </div>
  );
}

export default FormModal;

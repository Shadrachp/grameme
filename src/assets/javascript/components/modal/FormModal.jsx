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

            </div>
            <div className="modal-body-input">
              <div className="modal-input-email">
                <label>U S E R N A M E</label>
                <input type="email" />
              </div>
              <div className="modal-input-email">
                <label>P A S S W O R D</label>
                <input type="password"/>
              </div>
            </div>
            <div className="modal-body-extras">
              <div>test3</div>
              <div>test3</div>
            </div>
        </div>
        <div className="modal-footer">
            <div>test3</div>
        </div>
      </div>
  );
}

export default FormModal;

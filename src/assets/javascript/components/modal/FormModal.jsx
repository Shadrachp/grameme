import React from 'react';
import "../../../../assets/stylesheets/modal.scss";

const FormModal = (props) => {


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
            <div>test2</div>
        </div>
        <div className="modal-footer">
            <div>test3</div>
        </div>
      </div>
  );
}

export default FormModal;

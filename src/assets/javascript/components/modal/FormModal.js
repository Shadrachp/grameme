import React from 'react';
import "../../../../assets/stylesheets/modal.scss";

const FormModal = (props) => {


  return (

      <div className="modal-container"
      // onClick={()=>{props.close()}}
      style = {{display: (props.show ? 'block' : 'none')}}>
      </div>
  );
}

export default FormModal;

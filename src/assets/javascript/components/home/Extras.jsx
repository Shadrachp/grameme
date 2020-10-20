import React from 'react';

const Extras = (props) =>{
    return (
      <div className="extras-container">
        <div className="extras-grid">
          <div className="extras">
            <div className="extras-2">
              <div></div>
              <div></div>
            </div>
          </div>
          <div>
            <label className="extras-label">16</label>
          </div>
        </div>
        <div className="extras-grid">
          <div className="extras dislike">
            <div className="extras-2 dislike-extras">
              <div></div>
              <div></div>
            </div>
          </div>
          <div>
            <label className="extras-label">10</label>
          </div>
        </div>
      </div>
    );
}

export default Extras;

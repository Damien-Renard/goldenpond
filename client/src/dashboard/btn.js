import React from 'react';

const Btn = ({ img, text, handleClick }) => (
  <div>
    {
      img
      ? <div className="control-btn flex-row-center-center">
        <img src={img} alt={text} className="panel-btn-img" />
        <button className="panel-btn-with-img" onClick={handleClick}>{text}</button>
      </div>
      : <div className="control-btn flex-row-center-center">
        <button className="panel-btn" onClick={handleClick}>{text}</button>
      </div>
    }
  </div>
);

export default Btn;

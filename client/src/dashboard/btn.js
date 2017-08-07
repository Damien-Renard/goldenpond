import React from 'react';

const Btn = ({ img, text, handleClick }) => (
  <div className="control-btn flex-row-center-center">
    <img src={img} alt={text} className="panel-btn-img" />
    <button className="panel-btn" onClick={handleClick}>{text}</button>
  </div>
);

export default Btn;

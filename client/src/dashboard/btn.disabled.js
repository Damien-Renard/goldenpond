import React from 'react';

const Btn = ({ text }) => (
  <div className="control-btn flex-row-center-center">
    <button className="panel-btn-disabled" disabled>{text}</button>
  </div>
);

export default Btn;

import "./Ach.css"

import React from 'react';

const Ach = ({img,link}) => {
  return <div className="A"> 
    <div className="A-browser">
      <div className="A-circle"></div>
      <div className="A-circle"></div>
      <div className="A-circle"></div>
      </div> 
      <a href={link} target="_blank"rel="noreferrer">
        <img src={img} alt="" className="A-img" />
      </a>
    </div>;
}

export default Ach 

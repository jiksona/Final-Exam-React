import React from 'react';
import "./AchList.css"
import {achievements} from "../../data"
import Ach from "../achievements/Ach"
const AchList = () => {
  return <div className="al">
      <div className="al-texts">
          <h1 className="al-tittle">Achievements & Creations</h1>
          <p className="al-desc">
              Elon Musk Acievements that will shock you!
          </p>
      </div>
      <div className="al-list">
          {achievements.map((item) => (
              <Ach key={item.id} img={item.img} link= {item.link}/>
          ))}
          <Ach/>
          
      </div>
      

  </div>;
}

export default AchList;

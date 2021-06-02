import React from 'react';
import Satellite from '../../components/Satellite';
import { SATELLITES } from '../../constants/satellites';
import spacecraft from '../../assets/images/spacecraft.jpg';
import './index.css';

const Coordinates = () => {
  return (
    <div className="container">
      <img src={spacecraft} alt="spacecraft" width="200" className="spacecraft"/>
      <div className="satellites">
        {SATELLITES.map( satellite => (
          <Satellite key={satellite.name} {...satellite}/>
        ))}
      </div>
    </div>
  )
}

export default Coordinates;

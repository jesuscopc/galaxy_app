import React, { useState } from 'react';
import Satellite from '../../components/Satellite';
import { SATELLITES } from '../../constants/satellites';
import spacecraft from '../../assets/images/spacecraft.jpg';
import ModalResults from '../../components/ModalResults';
import { ISatellite } from '../../interfaces';
import './index.css';

const Coordinates = () => {
  const [satellite, setSatellite] = useState<ISatellite>();
  const [infoType, setinfoType] = useState<'coordenate' | 'message'>('coordenate');

  const getLocation = (distance: number) => {
    setSatellite(SATELLITES.find(satellite => satellite.distance === distance));
    setinfoType('coordenate');
  }
  
  const getMessage = (name: string) => {
    setSatellite(SATELLITES.find(satellite => satellite.name === name));
    setinfoType('message');
  }

  return (
    <div className="container">
      <img src={spacecraft} alt="spacecraft" width="200" className="spacecraft"/>
      <div className="satellites">
        {SATELLITES.map( satellite => (
          <Satellite 
            key={satellite.name}
            onGetLocation={getLocation}
            onGetMessage={getMessage}
            {...satellite}/>
        ))}
      </div>
      <ModalResults 
        infoType={infoType} 
        {...satellite}/>
    </div>
  )
}

export default Coordinates;

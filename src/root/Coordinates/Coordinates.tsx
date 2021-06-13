import React, { useState } from 'react';
import Satellite from '../../components/Satellite';
import { SATELLITES } from '../../constants/satellites';
import spacecraft from '../../assets/images/spacecraft.jpg';
import ModalResults from '../../components/ModalResults';
import { ISatellite } from '../../interfaces';
import './index.css';

const Coordinates = React.memo((): React.ReactElement => {
  const [satellite, setSatellite] = useState<ISatellite>({
    name: '',
    distance: 0,
    image: '',
    message: [],
    x: 0,
    y: 0
  });
  const [infoType, setinfoType] = useState<'coordenate' | 'message'>('coordenate');

  const getLocation = (distance: string): void => {
    const res = SATELLITES.find(satellite => satellite.distance === Number(distance));
    res && setSatellite(res);
    setinfoType('coordenate');
  }
  
  const getMessage = (name: string): void => {
    const res = SATELLITES.find(satellite => satellite.name === name);
    res && setSatellite(res);
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
})

export default Coordinates;

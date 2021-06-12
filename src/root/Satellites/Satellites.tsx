import React, { useState } from 'react';
import { SATELLITES } from '../../constants';
import { GalaxyService } from '../../services';
import { ISatellite } from '../../interfaces';


type TSatelliteData = {
  message: Array<string>;
  position: {
    x:number;
    y:number;
  };
}

const Satellites = (): React.ReactElement => {

  const [satelliteData, setSatelliteData] = useState<TSatelliteData>({
    message: [],
    position: {
      x: 0,
      y: 0
    },
  });
  const getSatellitePosition = (satellite: string): void=> {
    GalaxyService.getSatellitePosition(satellite).then( response => {
      setSatelliteData(response);
    }).catch( err => console.error(err));
  }

  const { message, position } = satelliteData;

  return (
    <div className="container">
      <h2 className="mb-3 text-center">This section only works with extension
        <a href="https://chrome.google.com/webstore/detail/cors-unblock/lfhmikememgdcahcdlaciloancbhjino/related">CORS unblock</a>
      </h2>
      {SATELLITES.map( ({name }: ISatellite)  => (
          <button 
            key={name}
            className="shadow btn btn-outline-primary fs-4 mb-5 p-4 m-2"
            tabIndex={0}
            onClick={() => getSatellitePosition(name)}
          >{name}
          </button>
        )
      )}
      <img src={SATELLITES[0].image} alt="satellite" width="200" className="p-1"/>
      <span className="d-flex">Position revelated: <strong> {`x: ${position.x} y: ${position.y}`}</strong></span>     
      <span >Message revelated: <strong>{message}</strong></span>
    </div>
  )
}

export default Satellites;

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
      {SATELLITES.map( ({name, image }: ISatellite)  => (
        <React.Fragment key={name}>
          <button 
            className="shadow btn btn-outline-primary d-flex flex-row mx-auto fs-4 mb-5"
            tabIndex={0}
            onClick={() => getSatellitePosition(name)}
          >{name}
          </button>
          <img src={image} alt="satellite" width="200" className="p-1"/>
          <span className="d-flex">Position revelated {name} <strong> {`x: ${position.x} y: ${position.y}`}</strong></span>     
          <span >Message revelated spacecraft: <strong>{message}</strong></span>
        </React.Fragment>    
        )
      )}
    </div>
  )
}

export default Satellites;

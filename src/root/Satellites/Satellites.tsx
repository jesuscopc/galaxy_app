import React, { useState } from 'react';
import { SATELLITES } from '../../constants';
import { ISatellite } from '../../interfaces';
import UseGalaxyApiHook from '../../hooks/UseGalaxyApiHook';

const Satellites = (): React.ReactElement => {

  const [nameSatellite, setNameSatellite ] = useState('');
  const { data: satelliteData, error } = UseGalaxyApiHook({satellite: nameSatellite});
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
            onClick={() => setNameSatellite(name)}
          >{name}
          </button>
        )
      )}
      <img src={SATELLITES[0].image} alt="satellite" width="200" className="p-1"/>
      <span className="d-flex">Position revelated: <strong> {`x: ${position.x} y: ${position.y}`}</strong></span>     
      <span >Message revelated: <strong>{message}</strong></span>
      {error && <span className="text-danger">Error to try get data use CORS unblock extension or restart services</span>}
    </div>
  )
}

export default Satellites;

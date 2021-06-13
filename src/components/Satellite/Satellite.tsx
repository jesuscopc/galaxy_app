import React, { useState } from 'react';
import { ISatellite } from '../../interfaces';

interface ISatelliteExt extends ISatellite {
  onGetLocation: Function;
  onGetMessage: Function;
}

const Satellite = ({ name, image, distance, onGetLocation, onGetMessage }: ISatelliteExt): React.ReactElement => {
  const [distanceValue, setDistanceValue] = useState<string>('');

  return (
    <div className="satellite p-2">
      <img src={image} alt={name} width="100"/>
      <span>{name} distance: {distance}</span>
      <div className="row">
        <div className="col-md-12">
          <label htmlFor="validationCustom01" className="form-label">Distancia</label>
          <input 
            type="number"
            placeholder="100"
            className="form-control"
            value={distanceValue}
            onChange={e => setDistanceValue(e.currentTarget.value)}
            />
        </div>
        <div className="col-md-6 mt-2">
          <button
            id="getLocationButton"
            type="button" 
            className="btn btn-outline-info"
            data-bs-toggle="modal" 
            data-bs-target="#exampleModal"
            onClick={() => onGetLocation(distanceValue)}>
            get Location
          </button>
        </div>
        <div className="col-md-6 mt-2">
          <button
            id="getMessageButton"
            type="button"
            className="btn btn-outline-success fw-bold"
            data-bs-toggle="modal" 
            data-bs-target="#exampleModal"
            onClick={() => onGetMessage(name)}
            >Get message</button>
        </div>
      </div>
      
    </div>
  )
}

export default Satellite;

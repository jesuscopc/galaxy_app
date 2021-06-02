import { ISatellite } from 'interfaces';
import React, { useState } from 'react';

const Satellite = ({ name, x, y, image}: ISatellite) => {

  const [distance, setDistance] = useState<string>()

  const getLocation = () => {
    alert('get location clicked');
  }

  const getMessage = () => {
    alert('get Message clicked');
  }

  return (
    <div className="satellite p-2">
      <img src={image} alt={name} width="100"/>
      <label>({x},</label>
      <label>{y})</label>
      <div className="row">
        <div className="col-md-12">
          <label htmlFor="validationCustom01" className="form-label">Distancia</label>
          <input 
            type="number"
            placeholder="100"
            className="form-control"
            value={distance}
            onChange={e => setDistance(e.currentTarget.value)}
            required />
        </div>
        <div className="col-md-6 mt-2">
          <button 
            className="btn btn-outline-info fw-bold"
            onClick={getLocation}
            >Get Location</button>
        </div>
        <div className="col-md-6 mt-2">
          <button 
            className="btn btn-outline-success fw-bold"
            onClick={getMessage}
            >Get message</button>
        </div>
      </div>
    </div>
  )
}

export default Satellite;

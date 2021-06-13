import React, { useState } from 'react';
import UseGalaxyApiHook from '../../hooks/UseGalaxyApiHook';
import spacecraft from '../../assets/images/spacecraft.jpg';
import './index.css';

const Spacecraft = (): React.ReactElement => {
  const [callData, setCallData] = useState(false);
  const { data: findSpacecraft, error } = UseGalaxyApiHook({ callSpacecraft: callData});

  const { message, position } = findSpacecraft;

  return (
    <div className="container">
      <h2 className="mb-3 text-center">This section only works with extension
        <a href="https://chrome.google.com/webstore/detail/cors-unblock/lfhmikememgdcahcdlaciloancbhjino/related">CORS unblock</a>
      </h2>
      <button 
        className="shadow btn btn-outline-primary d-flex mx-auto fs-4"
        tabIndex={0}
        onClick={() => setCallData(true)}
      >Get Top Secret
      </button>
      <img src={spacecraft} alt="spacecraft" width="200" className="spacecraft p-1"/>
      {message.length >= 1 && (
        <>
        <span className="d-flex">Position revelated spacecraft <strong> {`x: ${position.x} y: ${position.y}`}</strong></span>    
        <span>Message revelated spacecraft: <strong>{message}</strong></span>
        </>    
      )}
      {error && <span className="text-danger">Error to try get data use CORS unblock extension or restart services</span>}
    </div>
  )
}

export default Spacecraft;

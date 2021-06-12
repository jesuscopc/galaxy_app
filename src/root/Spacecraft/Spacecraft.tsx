import React, { useState } from 'react';
import { GalaxyService } from '../../services';
import spacecraft from '../../assets/images/spacecraft.jpg';
import './index.css';

type TSpaceCraft = {
  message: string;
  position: {
    x: number;
    y: number;
  }
}

const Spacecraft = (): React.ReactElement => {
  const [findSpacecraft, setFindSpacecraft] = useState<TSpaceCraft>({ 
    message: '',
    position: {
      x: 0,
      y: 0,
    }
  }
  ) 
  const data = {
    satellites: [{
        name: 'kenobi',
        distance: 100.0,
        message: ["este", "", "", "mensaje", ""]
      },
      {
      name: "skywalker",
      distance: 115.5,
      message: ["", "es", "", "", "secreto"]
      },
      {
      name: "sato",
      distance: 142.7,
      message: ["este", "", "un", "", ""]
      }
      ]
  };

  const getTopSecret = () => {
    GalaxyService.getTopSecret(data).then( response => {
      setFindSpacecraft(response.data);
    }).catch( error => console.log(error))
  }

  const { message, position } = findSpacecraft;

  return (
    <div className="container">
      <button 
        className="shadow btn btn-outline-primary d-flex mx-auto fs-4"
        tabIndex={0}
        onClick={getTopSecret}
      >Get Top Secret
      </button>
      <img src={spacecraft} alt="spacecraft" width="200" className="spacecraft p-1"/>
      {message !== '' && (
        <>
        <span className="d-flex">Position revelated spacecraft <strong> {`x: ${position.x} y: ${position.y}`}</strong></span>    
        <span className="fw-bold">Message revelated spacecraft:<strong>{message}</strong></span>
        </>    
      )}
    </div>
  )
}

export default Spacecraft;

import React from 'react';
import { GalaxyService } from '../../services';
import './index.css';

const Spacecraft = () => {
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
      console.log(response)
    }).catch( error => console.log(error))
  }

  return (
    <div className="container">
      <button 
        className="shadow btn btn-outline-primary d-flex mx-auto fs-4"
        tabIndex={0}
        onClick={getTopSecret}
      >Get Top Secret</button>    
    </div>
  )
}

export default Spacecraft;

import React from 'react';
import { ISatellite } from '../../interfaces';

interface IModalResult extends ISatellite {
  infoType: 'coordenate' | 'message';
}

const ModalResults = ({x,y, name, infoType, message }: IModalResult): React.ReactElement => {
  return (
    <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Coordenadas: {name}</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            {infoType === 'coordenate' && name !== '' ? (
              <label>Position:
                <span className="fw-bold">(x: {x}, y: {y})</span>
              </label>
            ): (
              <label>Message:
                <span className="fw-bold">{message}</span>
              </label>
            )}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-success" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalResults;

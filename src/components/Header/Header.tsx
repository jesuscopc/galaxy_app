import React from 'react';
import { Link } from 'react-router-dom';
import star from '../../assets/images/star-fox.gif';
import './index.css';

const Header = (): React.ReactElement => {
  return (
    <div className="wrapp__header">
      <h1 className="title">Galaxy App</h1>
      <Link className="shadow btn btn-outline-dark"
        to="/"
        tabIndex={0}
      >
        <span>Coordenadas</span>
      </Link>
      <Link className="shadow btn btn-outline-danger"
        to="/spacecraft"
        tabIndex={0}
      >
        <span>Nave espacial</span>
      </Link>
      <Link className="shadow btn btn-outline-success"
        to="/satellites"
        tabIndex={0}
      >
        <span>Satélites</span>
      </Link>
      <img src={star} alt="nave" width="150" />
    </div>
  )
}

export default Header;

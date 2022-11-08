import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../resources/logo.png';
import './logo.scss';

export const Logo = () => {
  return (
    <div className="logo">
      <Link to="/" className="logoLink noDecoration">
        <span className="logoWrapper">
          <img src={logo} className="logoImg" alt="logo" />
          <span>Just a <br />Movie DB</span>
        </span>
      </Link>
    </div>
  );
};

import React from 'react';
import { Link } from 'react-router-dom';

import { Logo } from '../Logo';
import { Menu } from '../Menu';
import './header.scss';

export const Header = () => {
  return (
    <header className="header">
      <div className="headerInner maxLayoutWidth">
        <Logo />
        <Menu />
      </div>
    </header>
  );
};

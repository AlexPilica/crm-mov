import React from 'react';

import { Logo } from '../Logo';
import './footer.scss';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerInner maxLayoutWidth">
        <Logo />
        <p>Copyright @ AlexPilica 2022</p>
      </div>
    </footer>
  );
};

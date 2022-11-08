import React from 'react';
import './loader.scss';

export const Loader = ({ fullPage = false }) => {
  return (
    <div className={`loader ${fullPage ? ' fullPage' : ''}`}>
      <div className="loaderEllipsis">
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};

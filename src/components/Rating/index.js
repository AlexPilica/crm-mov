import React, { useEffect, useState } from 'react';

import { getStorageItem, setStorageItem } from '../../utils/storage';
import './rating.scss';

export const Rating = ({ title, id }) => {
  const storageRating = getStorageItem('ratings')[id] || 0;
  const [ rating, setRating ] = useState(storageRating);

  useEffect(() => {
    setRating(storageRating);
  }, [id]);

  const rate = (rating) => {
    setRating(rating);
    setStorageItem('ratings', { [id]: rating });
  };

  return (
    <div className="ratingArea">
      <h4>{title}: {rating}</h4>
      <div className="myRating">
        {Array.from(Array(10).keys()).map(item => <button key={item} className={`ratingItem${ rating >= item + 1 ? ' active' : ''}`} onClick={() => rate(item+1)}>{item+1}</button>)}
      </div>
    </div>
  );
};

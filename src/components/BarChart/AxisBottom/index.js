import React, { useEffect, useRef } from 'react';
import {
  axisBottom,
  select
} from 'd3';

export const AxisBottom = ({ scale, transform }) => {
  const bottomAxisRef = useRef(null);

  useEffect(() => {
    if (bottomAxisRef.current) {
      select(bottomAxisRef.current).call(axisBottom(scale));
    }
  }, [scale]);

  return <g ref={bottomAxisRef} transform={transform} />;
};
import React, { useEffect, useRef } from 'react';
import {
  axisLeft,
  select
} from 'd3';

export const AxisLeft = ({ scale }) => {
  const leftAxisRef = useRef(null);

  useEffect(() => {
    if (leftAxisRef.current) {
      select(leftAxisRef.current).call(axisLeft(scale));
    }
  }, [scale]);

  return <g ref={leftAxisRef} />;
};
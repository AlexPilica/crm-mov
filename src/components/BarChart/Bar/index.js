import React, { useEffect, useRef } from 'react';
import {
  select
} from 'd3';

export const Bar = ({ value, height, scaleX, scaleY, delay, color, index }) => {
  const barRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    select(textRef.current)
      .transition()
      .duration(500)
      .attr('opacity', () => 1)
      .attr('y', () => scaleY(value) - 15)
      .delay(() => delay*100 + 750);

    select(barRef.current)
      .transition()
      .duration(1000)
      .attr('y', () => scaleY(value))
      .attr('height', () => height - scaleY(value))
      .delay(() => delay*100);
  }, []);

  return <g>
    <text 
      className="barLabel"
      ref={textRef} 
      x={scaleX(index) + 68}
      y={scaleY(value) + 20}
      fill="currentColor"
      opacity="0"
      textAnchor="middle"
    >{value}</text>
    <rect
      ref={barRef}
      x={scaleX(index) + 30}
      y={height}
      width={75}
      height={0}
      fill={color || "#ffb55a"}
    />
  </g>
};
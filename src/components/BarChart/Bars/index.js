import React from 'react';
import { Bar } from '../Bar';

export const Bars = ({ data, width, height, scaleX, scaleY, colors }) => (<>
  {data.map(({ value, label }, index) => <Bar 
    key={`bar-${label.split(' ').join('-')}`}
    label={label} 
    value={value}
    scaleX={scaleX}
    scaleY={scaleY}
    width={width}
    height={height}
    delay={index}
    color={colors[index]}
    index={index}
  />)}
</>)
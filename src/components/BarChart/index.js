import React, { useEffect, useRef, useState } from 'react';
import {
  scaleBand,
  scaleLinear
} from 'd3';

import { AxisBottom } from './AxisBottom';
import { AxisLeft } from './AxisLeft';
import { Bars } from './Bars';
import './barChart.scss';
import { Loader } from '../Loader';

const margin = { top: 15, right: 15, bottom: 230, left: 75 };
const fullWidth = 1280;
const fullHeight = 600;
const width = fullWidth - margin.left - margin.right;
const height = fullHeight - margin.top - margin.bottom;
const colors = ["#fd7f6f", "#7eb0d5", "#b2e061", "#bd7ebe", "#ffb55a", "#ffee65", "#beb9db", "#fdcce5", "#8bd3c7", "#d7658b"];

export const BarChart = ({ title, loading, data }) => {
  const parentG = useRef(null);
  const maxScaleY = parseInt(Math.max(...data.map(({ value }) => Math.ceil(value) * 1.1)));
  const labels = data.map(({ label }) => label);
  const scaleY = scaleLinear().domain([0,maxScaleY]).range([height,0]);
  const scaleX = scaleLinear().domain([0,10]).range([0, width]);

  if (loading) return <Loader />;

  return (  
    <div className="barChartWrapper">
      <h2>{title}</h2>
      <div className="barChartWrapperInner">
        <svg
          viewBox={`0 0 ${fullWidth} ${fullHeight}`}
          className="barChart"
        >
          <g transform={`translate(${margin.left}, ${margin.top})`} ref={parentG}>
            <AxisBottom scale={scaleX} transform={`translate(0, ${height})`} />
            <AxisLeft scale={scaleY} />
            <Bars data={data} height={height} width={width} scaleX={scaleX} scaleY={scaleY} colors={colors} />
            <g className="labels">
              {labels.map((label, index) => {
                const circleX = index % 2 === 0 ? 25 : width / 4;
                const circleY = height + 60 + 35 * (index % 2 === 0 ? index / 2 : index / 2 - 0.5 );
                const textX = index % 2 === 0 ? 45 : width / 4 + 20;
                const textY = height + 65 + 35 * (index % 2 === 0 ? index / 2 : index / 2 - 0.5 );

                return <g className="label" key={label}>
                  <circle cx={circleX} cy={circleY} r="10" fill={colors[index]}></circle>
                  <text className="labelText" fill={colors[index]} x={textX} y={textY}>{label}</text>
                </g>
              })}
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
};

import React from 'react';
import './Fire.css';

function Fire() {
  return (
    <svg className="Fire" viewBox="0 -20 120 240">
      <defs>
        <linearGradient
          id="flame-gradient"
          x1="0%"
          y1="0%"
          x2="0%"
          y2="100%"
        >
          <stop stopColor="#ffb200" offset="0.2" />
          <stop stopColor="#dc0000" offset="1" />
        </linearGradient>
      </defs>
      <g strokeWidth="0.5" strokeOpacity="0.5">
        <path
          className="spark"
          d="M13 90c-8,-10 -6,-14 -5,-21 3,-3 0,-7 -2,-19 8,11 18,12 7,40l0 0z"
        ></path>
        <path
          className="spark"
          d="M36 45c8,-10 6,-14 5,-21 -3,-3 0,-7 2,-19 -8,11 -18,12 -7,40l0 0z"
        ></path>
        <path
          className="spark"
          d="M63 48c8,-10 6,-14 5,-21 -3,-3 0,-7 2,-19 -8,11 -18,12 -7,40l0 0z"
        ></path>
        <path
          className="spark"
          d="M83 80c-8,-10 -6,-14 -5,-21 3,-3 0,-7 -2,-19 8,11 18,12 7,40l0 0z"
        ></path>
        <path
          className="spark"
          d="M94 126c8,-10 6,-14 5,-21 -3,-3 0,-7 2,-19 -8,11 -18,12 -7,40l0 0z"
        ></path>
        <path
          className="flame"
          d="M46 50c1,13 -15,26 -13,44 0,11 -4,-17 -2,-26 -1,-8 -3,-16 -9,-21 8,42 -28,33 -5,88 -4,-2 -8,-4 -12,-7 4,13 9,21 15,28 9,9 21,13 39,16 13,4 28,2 38,-6 10,-7 15,-19 12,-34 -3,6 -7,10 -13,12 3,-17 -14,-25 -7,-42 10,-20 3,-45 0,-32 -4,12 -11,21 -20,29 22,-70 -10,-53 -11,-88 -9,12 -14,23 -12,39z"
        ></path>
      </g>
    </svg>
  );
}

export default Fire;

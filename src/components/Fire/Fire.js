import React, { Component } from 'react';
import { TimelineMax, CSSPlugin, AttrPlugin } from 'gsap/all';
import './Fire.css';

export default class Fire extends Component {
  startFireAnim = () => {
    const plugins = [CSSPlugin, AttrPlugin];

    Array.from(document.querySelectorAll('.spark')).forEach(function(s) {
      new TimelineMax({
        repeat: -1,
        onRepeat: function() {
          this.duration(Math.random() + 0.2);
        },
      }).fromTo(
        s,
        0.2,
        {
          scale: 2,
          y: 40,
          transformOrigin: 'center bottom',
        },
        {
          scale: 0,
          y: -60,
        }
      );
    });

    Array.from(document.querySelectorAll('.flame')).forEach(function(f, idx) {
      new TimelineMax({
        repeat: -1,
        onRepeat: function() {
          this.duration(Math.random() * 0.4 + 0.2);
        },
      }).to(f, 0.2, {
        scaleY: 1.1 + (idx ? 0.2 : 0),
        scaleX: idx ? 1 : 0.8,
        transformOrigin: 'center bottom',
        repeat: 1,
        yoyo: true,
      });
    });
  };

  componentDidMount = () => {
    this.startFireAnim();
  };

  render() {
    return (
      <svg className="Fire" viewBox="0 -20 120 240">
        <defs>
          <linearGradient id="flame-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
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
}

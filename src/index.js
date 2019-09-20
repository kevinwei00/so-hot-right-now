import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'normalize.css';
import { TimelineMax } from 'gsap/all';
import App from './components/App/App';

ReactDOM.render(<App />, document.getElementById('root'));

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

import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

function About() {
  return (
    <section className="About">
      <h2>What's This For?</h2>
      <p>This is the about page with a disclaimer. Powered by Indeed.</p>
      <Link to="/">
        <button>Okay, show me what's hot!</button>
      </Link>
    </section>
  );
}

export default About;

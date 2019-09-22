import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="Footer">
      <div>
        <Link to="/about">What's this for?</Link>
      </div>
      <div>by Kevin Wei</div>
    </footer>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="Footer text-center">
      <div className="Footer__separator"></div>
      <Link to="/about">
        <div className="Footer__content">What's this for?</div>
      </Link>
    </footer>
  );
}

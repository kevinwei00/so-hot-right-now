import React from 'react';
import './Header.css';
import Fire from '../Fire/Fire';

export default function Header() {
  return (
    <header className="Header text-center">
      <div className="Header__Container">
        <h1>
          <div className="Header__LogoTop">
            So <span className="Header__LogoTop--emphasize">Hot</span>
            <Fire />
          </div>
          <div className="Header__LogoBottom">Right Now</div>
        </h1>
      </div>
    </header>
  );
}

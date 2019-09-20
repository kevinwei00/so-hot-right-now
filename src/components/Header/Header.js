import React from 'react';
import './Header.css';
import Fire from '../Fire/Fire';

function Header() {
  return (
    <header className="Header">
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

export default Header;

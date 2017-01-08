import React from 'react';

import Logo from '../logo/logo';
import './header.css';

const Header = ({location}) => {
  return (
    <header className="Header">
      { location === '/' && (
        <div className="Header--container">
          <Logo />
          <a href="./" className="Header--link is-active">Home</a>
          <a href="./archive" className="Header--link">Blog</a>
          <a href="./work" className="Header--link">Work</a>
        </div>
      )}
      { location === '/archive' && (
        <div className="Header--container">
          <Logo />
          <a href="./" className="Header--link">Home</a>
          <a href="./archive" className="Header--link is-active">Blog</a>
          <a href="./work" className="Header--link">Work</a>
        </div>
      )}
      { location === '/work' && (
        <div className="Header--container">
          <Logo />
          <a href="./" className="Header--link">Home</a>
          <a href="./archive" className="Header--link">Blog</a>
          <a href="./work" className="Header--link is-active">Work</a>
        </div>
      )}
    </header>
  )
}

export default Header;

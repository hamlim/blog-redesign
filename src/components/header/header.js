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
          <a href="./blog" className="Header--link">Blog</a>
          <a href="./projects" className="Header--link">Projects</a>
        </div>
      )}
      { location === '/blog' && (
        <div className="Header--container">
          <Logo />
          <a href="./" className="Header--link">Home</a>
          <a href="./blog" className="Header--link is-active">Blog</a>
          <a href="./projects" className="Header--link">Projects</a>
        </div>
      )}
      { location === '/projects' && (
        <div className="Header--container">
          <Logo />
          <a href="./" className="Header--link">Home</a>
          <a href="./blog" className="Header--link">Blog</a>
          <a href="./projects" className="Header--link is-active">Projects</a>
        </div>
      )}
    </header>
  )
}

export default Header;

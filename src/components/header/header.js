import React from 'react';

// import Logo from '../logo/logo';
import Link from '../link/link';
import './header.css';

const Header = ({location}) => {
  return (
    <header className="Header">
      { location === '/' && (
        <div className="Header--container">
          <h1 className="Header--title">Matthew Hamlin <span className="Header--pageTitle">Home</span></h1>
          <Link to="./" isPrimary>Home</Link>
          <Link to="./blog">Blog</Link>
          <Link to="./projects">Projects</Link>
        </div>
      )}
      { location === '/blog' && (
        <div className="Header--container">
          <h1 className="Header--title">Matthew Hamlin <span className="Header--pageTitle">Blog</span></h1>
          <Link to="./">Home</Link>
          <Link to="./blog" isPrimary>Blog</Link>
          <Link to="./projects">Projects</Link>
        </div>
      )}
      { location === '/projects' && (
        <div className="Header--container">
          <h1 className="Header--title">Matthew Hamlin <span className="Header--pageTitle">Projects</span></h1>
          <Link to="./">Home</Link>
          <Link to="./blog">Blog</Link>
          <Link to="./projects" isPrimary>Projects</Link>
        </div>
      )}
    </header>
  )
}

export default Header;

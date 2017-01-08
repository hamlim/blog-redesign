import React from 'react';
import './footer.css';


const Footer = (props) => (
  <footer className="Footer">
    <div className="Footer--container">
      <p className="Footer--text">&copy; {(new Date()).getFullYear()} Matt Hamlin</p>
    </div>
  </footer>
);

export default Footer;

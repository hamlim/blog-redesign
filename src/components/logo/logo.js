import React from 'react';
import './logo.css';

const Logo = (props) => {
  return (
    <h3 className="Logo">
      <svg className="Logo--letter" width="32" height="32" viewBox="0 0 32 32" title="Matt Hamlin">
        <path className="Logo--back" fill="" d="M32 0 L32 32 L0 32 Z"/>
        <path className="Logo--front" d="M0 0 L32 32 L0 32 Z"/>
      </svg>
      <svg className="Logo--letter" width="32" height="32" viewBox="0 0 32 32">
        <path className="Logo--back" d="M0 0 L6 0 L12 32 L0 32 Z M20 0 L32 0 L32 32 L22 32 Z"/>
        <path className="Logo--front" d="M32 0 L32 20 L0 32 L0 12 Z"/>
      </svg>
    </h3>
  )
};

export default Logo;

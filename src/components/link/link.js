import React from 'react';

import './link.css';

const Link = ({to, isPrimary, children}) => {
  return (
    <a href={to} className={'Link ' + (isPrimary ? 'Link--primary' : '')}>
      {children}
    </a>
  )
};

export default Link;

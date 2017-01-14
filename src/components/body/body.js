import React from 'react';

import Home from '../home/home';
import Projects from '../projects/projects';
import Blog from '../blog/blog';

import './body.css';

const Body = ({location}) => {
  return (
    <article className="Body">
      { location === "/" && (
        <Home />
      )}
      { location === "/projects" && (
        <Projects />
       )}
       { location === "/blog" && (
         <Blog />
       )}

    </article>
  )
};


export default Body;

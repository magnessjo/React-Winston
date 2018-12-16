import React from 'react';
import { Route, BrowserRouter, NavLink } from 'react-router-dom';
import Introduction from 'scripts/pages/Introduction';
import Gallery from 'scripts/pages/Gallery';
import About from 'scripts/pages/About';

//@ts-ignore
require('styles/header.css');

const Wrapper = () => (
  <BrowserRouter>
    <div>
      <nav>
        <div className="lock">
          <NavLink exact activeClassName="active" to="/">
            <img src="/images/winston.svg" alt="winston-logo" />
          </NavLink>
          <div>
            <NavLink activeClassName="active" to="/about">
              About
            </NavLink>
            <NavLink activeClassName="active" to="/gallery">
              Gallery
            </NavLink>
          </div>
        </div>
      </nav>
      <Route path="/gallery" render={() => <Gallery />} />
      <Route path="/about" render={() => <About />} />
      <Route path="/" exact render={() => <Introduction />} />
    </div>
  </BrowserRouter>
);

export default Wrapper;

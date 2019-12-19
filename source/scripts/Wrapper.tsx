import React from 'react';
import { Route, BrowserRouter, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import Introduction from 'scripts/pages/Introduction';
import Gallery from 'scripts/pages/Gallery';
import About from 'scripts/pages/About';

const Nav = styled.nav`
  border-bottom: 1px solid var(--gray, #eee);

  & .lock {
    display: flex;
    align-items: center;
    padding-right: 0;

    & > a {
      width: 40px;
      height: 40px;
    }
  }

  & .lock > div {
    margin-left: auto;
    display: flex;
  }

  & .lock > div a {
    margin-left: 5px;
    text-decoration: none;
    color: black;
    padding: 15px 10px;
    position: relative;
    display: block;

    @media (min-width: 768px) {
      padding: 15px;
      margin-left: 10px;
    }

    &:first-of-type {
      margin-left: auto;
    }

    &:hover {
      background-color: var(--gray, #eee);
      transition: background 0.3s;

      &.active:after {
        border-bottom: 10px solid white;
      }
    }

    &.active:after {
      content: '';
      position: absolute;
      bottom: -1px;
      left: 50%;
      transform: translateX(-50%);
      height: 0;
      width: 0;
      border-left: 12px solid transparent;
      border-right: 12px solid transparent;
      border-bottom: 10px solid var(--gray, #eee);
    }
  }
`;

const client = new ApolloClient({
  uri: '/api',
});

const Wrapper = () => (
  <ApolloProvider client={client}>
    <BrowserRouter>
      <div>
        <Nav>
          <div className="lock">
            <NavLink exact={true} activeClassName="active" to="/">
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
        </Nav>
        <Route path="/gallery" render={() => <Gallery />} />
        <Route path="/about" render={() => <About />} />
        <Route path="/" exact={true} render={() => <Introduction />} />
      </div>
    </BrowserRouter>
  </ApolloProvider>
);

export default Wrapper;

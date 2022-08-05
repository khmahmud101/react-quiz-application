import React from 'react';
import Account from './Account';
import classes from '../../styles/Nav.module.css'
import logo from '../../assets/images/logo-bg.png'
const Nav = () => {
    return (
        <nav className={classes.nav}>
        <ul>
          <li>
            <a href="index.html" className={classes.brand}>
              <img src={logo} />
              <h3>Learn with Sumit</h3>
            </a>
          </li>
        </ul>
       <Account></Account>
      </nav>
    );
};

export default Nav;
import React from 'react';
import PropTypes from 'prop-types';

import './NavItemsList.scss';
import NavItem from './NavItem/NavItem';

const NavItemsList = props => (
  <ul className="NavItemsList">
    <NavItem link="/" active>Burger Builder</NavItem>
    <NavItem link="/">Checkout</NavItem>
  </ul>
);

NavItemsList.propTypes = {

};

export default NavItemsList;

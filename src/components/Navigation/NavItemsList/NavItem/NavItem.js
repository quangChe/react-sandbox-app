import React from 'react';
import PropTypes from 'prop-types';

import './NavItem.scss';

const NavItem = props => (
  <li className="NavItem">
    <a href={props.link} className={props.active ? "active" : null}>{props.children}</a>
  </li>
);

NavItem.propTypes = {
  active: PropTypes.bool,
  link: PropTypes.string.isRequired,
};

export default NavItem;

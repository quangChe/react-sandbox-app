import React from 'react';
import PropTypes from 'prop-types';

import './Toolbar.scss';
import Logo from '../../UI/Logo/Logo';
import NavItemsList from '../NavItemsList/NavItemsList';

const Toolbar = props => (
  <header className="Toolbar">
    <div>Menu</div>
    <Logo/>
    <NavItemsList/>
  </header>
);

Toolbar.propTypes = {

};

export default Toolbar;

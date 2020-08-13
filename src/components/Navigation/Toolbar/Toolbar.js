import React from 'react';

import './Toolbar.scss';
import Logo from '../../UI/Logo/Logo';
import NavItemsList from '../NavItemsList/NavItemsList';

const Toolbar = props => (
  <header className="Toolbar">
    <div>Menu</div>
    <div className="LogoContainer">
      <Logo/>
    </div>
    <NavItemsList/>
  </header>
);

export default Toolbar;

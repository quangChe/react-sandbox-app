import React from 'react';

import './SideDrawer.scss';
import Logo from '../../UI/Logo/Logo';
import NavItemsList from '../NavItemsList/NavItemsList';

const SideDrawer = props => {
  return (
    <div className="SideDrawer">
      <div className="LogoContainer">
        <Logo/>
      </div>
      <nav>
        <NavItemsList/>
      </nav>
    </div>
  )
};

export default SideDrawer;

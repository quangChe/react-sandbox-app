import React from 'react';

import './SideDrawer.scss';
import Logo from '../../UI/Logo/Logo';
import NavItemsList from '../NavItemsList/NavItemsList';

const SideDrawer = props => {
  return (
    <div className="SideDrawer">
      <Logo/>
      <nav>
        <NavItemsList/>
      </nav>
    </div>
  )
};

export default SideDrawer;

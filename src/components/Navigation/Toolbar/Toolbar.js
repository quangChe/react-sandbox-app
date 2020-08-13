import React from 'react';

import './Toolbar.scss';
import Logo from '../../UI/Logo/Logo';
import NavItemsList from '../NavItemsList/NavItemsList';
import DrawerToggler from '../SideDrawer/DrawerToggler/DrawerToggler';

const Toolbar = props => (
  <header className="Toolbar">
    <DrawerToggler toggleSideDrawer={props.toggleSideDrawer}/>
    <div className="LogoContainer">
      <Logo/>
    </div>
    <div className="DesktopOnly">
      <NavItemsList/>
    </div>
  </header>
);

export default Toolbar;

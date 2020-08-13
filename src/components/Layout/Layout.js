import React from 'react';

import './Layout.scss';
import Aux from '../../hoc/Aux';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

const Layout = (props) => (
  <Aux>
    <Toolbar/>
    <SideDrawer/>
    <main className="MainContent">
      {props.children}
    </main>
  </Aux>
);

export default Layout;
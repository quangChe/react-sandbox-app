import React from 'react';

import './Layout.scss';
import Aux from '../../hoc/Aux';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const Layout = (props) => (
  <Aux>
    <Toolbar/>
    <main className="MainContent">
      {props.children}
    </main>
  </Aux>
);

export default Layout;
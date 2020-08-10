import React from 'react';

import Aux from '../../hoc/Aux';
import './Layout.scss';

const layout = (props) => (
  <Aux>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main className="MainContent">
      {props.children}
    </main>
  </Aux>
);

export default layout;
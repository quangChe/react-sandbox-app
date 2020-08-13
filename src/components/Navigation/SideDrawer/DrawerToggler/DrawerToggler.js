import React from 'react';
import PropTypes from 'prop-types';

import './DrawerToggler.scss';

const DrawerToggler = props => {
  return (
    <div className="DrawerToggler" onClick={props.toggleSideDrawer}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
};

DrawerToggler.propTypes = {
  toggleSideDrawer: PropTypes.func.isRequired
};

export default DrawerToggler;

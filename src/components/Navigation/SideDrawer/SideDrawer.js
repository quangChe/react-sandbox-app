import React from 'react';
import PropTypes from 'prop-types';

import './SideDrawer.scss';
import Logo from '../../UI/Logo/Logo';
import NavItemsList from '../NavItemsList/NavItemsList';
import Backdrop from "../../UI/Backdrop/Backdrop";

const SideDrawer = props => {
  const toggleClass = props.opened ? "SideDrawer Open" : "SideDrawer Close";

  return (
    <>
      <Backdrop show={props.opened} hide={props.toggle}/>
      <div className={toggleClass}>
        <div className="LogoContainer">
          <Logo/>
        </div>
        <nav>
          <NavItemsList/>
        </nav>
      </div>
    </>
  )
};

SideDrawer.propTypes = {
  opened: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired
}

export default SideDrawer;

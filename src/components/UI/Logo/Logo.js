import React from 'react';

import './Logo.scss';
import burgerLogo from '../../../assets/images/burger-logo.png';

const Logo = props => (
  <div className="Logo">
    <img src={burgerLogo} alt="MyBurger logo"/> 
  </div>
);

export default Logo;


import React from 'react';
import PropTypes from 'prop-types';

import './Toolbar.scss';
import Logo from '../../UI/Logo/Logo';

const Toolbar = props => (
  <header className="Toolbar">
    <div>Menu</div>
    <Logo/>
    <nav>NavMenu</nav>
  </header>
);

Toolbar.propTypes = {

};

export default Toolbar;

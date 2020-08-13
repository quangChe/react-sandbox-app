import React from 'react';
import PropTypes from 'prop-types';

import './Toolbar.scss';

const Toolbar = props => (
  <header className="Toolbar">
    <div>Menu</div>
    <div>Logo</div>
    <nav>NavMenu</nav>
  </header>
);

Toolbar.propTypes = {

};

export default Toolbar;

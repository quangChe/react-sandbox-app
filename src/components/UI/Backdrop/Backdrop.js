import React from 'react';
import PropTypes from 'prop-types';

import './Backdrop.scss';

const Backdrop = props => (
  props.show ? <div className="Backdrop" onClick={props.hide}></div> : null
);

Backdrop.propTypes = {
  show: PropTypes.bool,
  hide: PropTypes.func
};

export default Backdrop;

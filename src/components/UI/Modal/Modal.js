import React from 'react';
import PropTypes from 'prop-types';

import './Modal.scss';

const Modal = props => (
  <div className="Modal">
    {props.children}
  </div>
);

Modal.propTypes = {
  
};

export default Modal;

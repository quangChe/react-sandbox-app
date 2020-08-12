import React from 'react';
import PropTypes from 'prop-types';

import './Modal.scss';

const Modal = props => (
  <div 
    className="Modal"
    style={{
      transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
      opacity: props.show ? '1' : '0',
    }}>
    {props.children}
  </div>
);

Modal.propTypes = {
  show: PropTypes.bool
};

export default Modal;

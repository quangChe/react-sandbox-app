import React from 'react';
import PropTypes from 'prop-types';

import './Modal.scss';
import Aux from '../../../hoc/Aux';
import Backdrop from '../Backdrop/Backdrop';

const Modal = props => (
  <Aux>
    <Backdrop show={props.show} hide={props.hide}/>
    <div 
      className="Modal"
      style={{
        transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: props.show ? '1' : '0',
      }}>
      {props.children}
    </div>
  </Aux>
  
);

Modal.propTypes = {
  show: PropTypes.bool,
  hide: PropTypes.func
};

export default Modal;

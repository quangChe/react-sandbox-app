import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Modal.scss';
import Aux from '../../../hoc/Aux';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show;
  }

  componentDidUpdate() {
    console.log("Modal updated!");
  }

  render() {
    return (
      <Aux>
        <Backdrop show={this.props.show} hide={this.props.hide}/>
        <div 
          className="Modal"
          style={{
            transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: this.props.show ? '1' : '0',
          }}>
          {this.props.children}
        </div>
      </Aux>
    )
  }
}

Modal.propTypes = {
  show: PropTypes.bool,
  hide: PropTypes.func
};

export default Modal;

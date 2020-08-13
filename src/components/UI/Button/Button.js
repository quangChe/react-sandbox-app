import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

const Button = props => (
  <button 
    className={["Button", props.buttonType].join(' ')}
    onClick={props.clicked}>{props.children}</button>
);

Button.propTypes = {
  clicked: PropTypes.func.isRequired,
  buttonType: PropTypes.string.isRequired
};

export default Button;

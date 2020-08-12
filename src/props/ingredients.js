import PropTypes from 'prop-types';

export const ingredientsProp = (useBooleans = false) => useBooleans ?
  PropTypes.shape({
    salad: PropTypes.bool,
    bacon: PropTypes.bool,
    cheese: PropTypes.bool,
    meat: PropTypes.bool
  }).isRequired 
  : 
  PropTypes.shape({
    salad: PropTypes.number,
    bacon: PropTypes.number,
    cheese: PropTypes.number,
    meat: PropTypes.number
  }).isRequired;

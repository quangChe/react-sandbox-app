import React from 'react';
import PropTypes from 'prop-types';
import { ingredientsProp } from '../../../props/ingredients';
import './BuildControls.scss';
import ControlBox from './ControlBox/ControlBox';

const controlItems = [
  {label: 'Salad', type: 'salad'},
  {label: 'Meat', type: 'meat'},
  {label: 'Cheese', type: 'cheese'},
  {label: 'Bacon', type: 'bacon'}
]

const BuildControls = props => {
  return (
    <div className="BuildControls">
      <p className="TotalPrice">Current Price: ${props.totalPrice.toFixed(2)}</p>
      {controlItems.map((ctrl, i) => 
        <ControlBox 
          key={ctrl.label + i} 
          label={ctrl.label} 
          addIngredient={() => props.addIngredientHandler(ctrl.type)}
          removeIngredient={() => props.removeIngredientHandler(ctrl.type)}
          disableRemoval={props.disabledIngredients[ctrl.type]}/>
      )}
      <button 
        className="OrderButton"
        disabled={props.disableOrdering}
        onClick={props.placeOrder}>Place Order</button>
    </div>
  )
};  

BuildControls.propTypes = {
  addIngredientHandler: PropTypes.func.isRequired,
  removeIngredientHandler: PropTypes.func.isRequired,
  disabledIngredients: ingredientsProp(true),
  totalPrice: PropTypes.number.isRequired,
  disableOrdering: PropTypes.bool.isRequired
};

export default BuildControls;

import React from 'react';
import PropTypes from 'prop-types';
import { ingredientsProp } from '../../../props/ingredients';
import Aux from '../../../hoc/Aux';

import Button from '../../UI/Button/Button';

const OrderSheet = props => {
  const ingredientList = Object.keys(props.ingredients)
    .map(ingKey => {
      return (
        <li key={ingKey}>
          <span style={{textTransform: 'capitalize'}}>{ingKey}</span>: {props.ingredients[ingKey]}
        </li>
      );
    });

  return (
    <Aux>
      <h3>Order Summary</h3>
      <p>Serving up your delicious burger with the following ingredients:</p>
      <ul>
        {ingredientList}
      </ul>
      <p><strong>Total Price: ${props.totalPrice.toFixed(2)}</strong></p>
      <p>Continue to checkout?</p>
      <Button 
        clicked={props.cancel}
        buttonType="Danger">Cancel</Button>
      <Button 
        clicked={props.continue}
        buttonType="Success">Continue</Button>
    </Aux>
  )
};

OrderSheet.propTypes = {
  totalPrice: PropTypes.number.isRequired,
  ingredients: ingredientsProp(),
  cancel: PropTypes.func.isRequired,
  continue: PropTypes.func.isRequired
};

export default OrderSheet;

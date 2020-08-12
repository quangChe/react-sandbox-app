import React from 'react';
import PropTypes from 'prop-types';
import { ingredientsProp } from '../../../props/ingredients';
import Aux from '../../../hoc/Aux';

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
      <p>Continue to checkout?</p>
    </Aux>
  )
};

OrderSheet.propTypes = {
  ingredients: ingredientsProp(),
};

export default OrderSheet;

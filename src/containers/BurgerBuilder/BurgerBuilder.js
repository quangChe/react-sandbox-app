import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.75,
  meat: 1.30, 
  bacon: 0.85
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4
  }

  addIngredientHandler = (type) => {
    const newCount = this.state.ingredients[type] + 1;
    const updatedIngredients = {...this.state.ingredients, [type]: newCount};
    const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
    this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
  }

  removeIngredientHandler = (type) => {
    if (this.state.ingredients[type] > 0) {
      const newCount = this.state.ingredients[type] - 1;
      const updatedIngredients = {...this.state.ingredients, [type]: newCount};
      const newPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
      this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
    }
  }

  render() {
    const disabledIngredients = {
      ...this.state.ingredients
    };

    for (let key in disabledIngredients)
    {
      disabledIngredients[key] = disabledIngredients[key] <= 0;
    }

    return (
      <Aux>
        <Burger ingredients={this.state.ingredients}/>
        <BuildControls 
          addIngredientHandler={this.addIngredientHandler}
          removeIngredientHandler={this.removeIngredientHandler}
          disabledIngredients={disabledIngredients}/>
      </Aux>
    )
  }
}

export default BurgerBuilder;
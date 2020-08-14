import React, { Component } from 'react';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSheet from '../../components/Burger/OrderSheet/OrderSheet';


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
    totalPrice: 4,
    orderReady: false,
    placingOrder: false
  }

  confirmOrderReady = () => {
    const { ingredients } = this.state;
    const totalIngredients = Object.keys(ingredients).reduce((sum, ingredientName) => {
      return sum = sum + ingredients[ingredientName];
    }, 0);
    this.setState({orderReady: totalIngredients > 0})
  }

  addIngredientHandler = (type) => {
    const newCount = this.state.ingredients[type] + 1;
    const updatedIngredients = {...this.state.ingredients, [type]: newCount};
    const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
    this.setState({totalPrice: newPrice, ingredients: updatedIngredients}, 
      this.confirmOrderReady);
  }

  removeIngredientHandler = (type) => {
    if (this.state.ingredients[type] > 0) {
      const newCount = this.state.ingredients[type] - 1;
      const updatedIngredients = {...this.state.ingredients, [type]: newCount};
      const newPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
      this.setState({totalPrice: newPrice, ingredients: updatedIngredients}, 
        this.confirmOrderReady);
    }
  }

  placeOrderHandler = (isPlacingOrder) => {
    this.setState({placingOrder: isPlacingOrder});
  }

  continueOrder = () => {
    alert('Continue!');
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
      <>
        <Modal show={this.state.placingOrder} hide={() => this.placeOrderHandler(false)}>
          <OrderSheet 
            totalPrice={this.state.totalPrice}
            ingredients={this.state.ingredients}
            continue={this.continueOrder}
            cancel={() => this.placeOrderHandler(false)}/>
        </Modal>
        <Burger ingredients={this.state.ingredients}/>
        <BuildControls 
          addIngredientHandler={this.addIngredientHandler}
          removeIngredientHandler={this.removeIngredientHandler}
          disabledIngredients={disabledIngredients}
          totalPrice={this.state.totalPrice}
          disableOrdering={!this.state.orderReady}
          placeOrder={() => this.placeOrderHandler(true)}/>
      </>
    )
  }
}

export default BurgerBuilder;
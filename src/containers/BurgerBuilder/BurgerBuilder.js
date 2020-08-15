import React, { Component } from 'react';

import api from '../../api/api';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSheet from '../../components/Burger/OrderSheet/OrderSheet';
import LoadingSpinner from '../../components/UI/LoadingSpinner/LoadingSpinner';
import withErrorHandling from '../../hoc/withErrorHandling/withErrorHandling';


const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.75,
  meat: 1.30, 
  bacon: 0.85
};

class BurgerBuilder extends Component {
  state = {
    ingredients: null,
    totalPrice: 4,
    orderReady: false,
    placingOrder: false,
    loading: false
  }

  componentDidMount() {
    api.get('/ingredients.json')
      .then(response => {
        this.setState({ingredients: response.data})
      })
      .catch(error => {
        console.error(error);
      });
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

  submitOrder = () => {
    this.setState({loading: true});
    const order = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice,
      customer: {
        name: 'Quang Che',
        address: {
          street: '123 Test Rd.',
          city: 'Los Angeles',
          state: 'CA',
          zip: '92626',
        },
        email: 'qtest@testing123.com'
      },
      deliveryMethod: 'fastest'
    }

    api.post('/orders.json', order)
      .then(response => {
        this.setState({loading: false, placingOrder: false});
        console.log(response);
      })
      .catch(error => {
        this.setState({loading: false, placingOrder: false});
        console.error(error);
      });
  }

  render() {
    const disabledIngredients = {
      ...this.state.ingredients
    };

    for (let key in disabledIngredients)
    {
      disabledIngredients[key] = disabledIngredients[key] <= 0;
    }

    const orderForm = (this.state.loading || !this.state.ingredients)
      ? <LoadingSpinner/> 
      : <OrderSheet 
          totalPrice={this.state.totalPrice}
          ingredients={this.state.ingredients}
          continue={this.submitOrder}
          cancel={() => this.placeOrderHandler(false)}/>;

    const burgerView = !this.state.ingredients 
      ? <LoadingSpinner/>
      : (
          <>
            <Burger ingredients={this.state.ingredients}/>
            <BuildControls 
              addIngredientHandler={this.addIngredientHandler}
              removeIngredientHandler={this.removeIngredientHandler}
              disabledIngredients={disabledIngredients}
              totalPrice={this.state.totalPrice}
              disableOrdering={!this.state.orderReady}
              placeOrder={() => this.placeOrderHandler(true)}/>
          </>
        );

    return (
      <>
        <Modal show={this.state.placingOrder} hide={() => this.placeOrderHandler(false)}>
          {orderForm}
        </Modal>
        {burgerView}
      </>
    )
  }
}

export default withErrorHandling(BurgerBuilder, api);
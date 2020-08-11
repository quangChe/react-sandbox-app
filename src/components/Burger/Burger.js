import React from 'react'
import PropTypes from 'prop-types'

import './Burger.scss';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const Burger = props => {
  return (
    <div className="Burger">
      <BurgerIngredient type="bread-top"></BurgerIngredient>
      <BurgerIngredient type="cheese"></BurgerIngredient>
      <BurgerIngredient type="meat"></BurgerIngredient>
      <BurgerIngredient type="bread-bottom"></BurgerIngredient>
    </div>
  )
}

Burger.propTypes = {

}

export default Burger

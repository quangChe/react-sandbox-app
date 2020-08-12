import React from 'react';
import PropTypes from 'prop-types';

import './Burger.scss';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = props => {
  let burgerIngredients = Object.keys(props.ingredients)
    .map(ingredient => {
      return [...Array(props.ingredients[ingredient])]
        .map((_, i) => {
        return <BurgerIngredient key={ingredient + i} type={ingredient}/>
      });
    })
    .reduce((accum, elem) => {
      return accum.concat(elem);
    }, []);

  burgerIngredients = burgerIngredients.length ? burgerIngredients 
    : <p>Add ingredients to your burger!</p>;

  return (
    <div className="Burger">
      <BurgerIngredient type="bread-top"/>
      { burgerIngredients }
      <BurgerIngredient type="bread-bottom"/>
    </div>
  )
};

Burger.propTypes = {
  
};

export default Burger;

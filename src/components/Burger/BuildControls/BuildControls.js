import React from 'react';
import PropTypes from 'prop-types';

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
      { 
        controlItems.map((ctrl, i) => 
          <ControlBox key={ctrl.label + i} label={ctrl.label}></ControlBox>
        )
      }
    </div>
  )
};  

BuildControls.propTypes = {

};

export default BuildControls;

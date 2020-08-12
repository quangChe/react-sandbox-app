import React from 'react'
import PropTypes from 'prop-types'

import './ControlBox.scss';

const ControlBox = props => {
  return (
    <div className="ControlBox">
      <div className="Label">{props.label}</div>
      <button 
        className="Less"
        onClick={props.removeIngredient}
        disabled={props.disableRemoval}>Less</button>
      <button 
        className="More" 
        onClick={props.addIngredient}>More</button>
    </div>
  )
}

ControlBox.propTypes = {
  label: PropTypes.string.isRequired,
  addIngredient: PropTypes.func.isRequired,
  removeIngredient: PropTypes.func.isRequired
}

export default ControlBox

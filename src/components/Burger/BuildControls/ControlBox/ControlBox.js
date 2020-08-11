import React from 'react'
import PropTypes from 'prop-types'

const ControlBox = props => {
  return (
    <div>
      <div className="Label">{props.label}</div>
      <button className="Less">Less</button>
      <button className="More">More</button>
    </div>
  )
}

ControlBox.propTypes = {
  label: PropTypes.string.isRequired
}

export default ControlBox

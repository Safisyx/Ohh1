// src/containers/Board.js
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './Square.css'

export class Square extends PureComponent {
  static propTypes = {
    value: PropTypes.number.isRequired
  }


  render() {
    return (
      <div className="Square">
      </div>
    )
  }
}

export default Square

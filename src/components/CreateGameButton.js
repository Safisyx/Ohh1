import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createGame } from '../actions/game'
import './CreateGameButton.css'

export class CreateGameButton extends PureComponent {
  static propTypes = {
    createGame: PropTypes.func.isRequired,
    label: PropTypes.String
  }

  handleClick = () => {
    this.props.createGame(6)
  }

  render() {
    return (
      <button
        onClick={this.handleClick}
        className="CreateGameButton"
      >
        {this.props.label || 'New game'}
      </button>
    )
  }
}

export default connect(null,{createGame})(CreateGameButton)

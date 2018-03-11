import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { move } from '../actions/game'
import './Square.css'

export class Square extends PureComponent {
  static propTypes = {
    value: PropTypes.number.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    makeMove: PropTypes.func.isRequired,
    locked: PropTypes.bool,
  }

  handleClick = () => {
    if (this.props.locked) return
      this.props.makeMove(this.props.x, this.props.y)
  }

  classNames= ()=> {
    const { value } = this.props

    let classnames = ['Square']
    classnames.push(`fill-${value || 0}`)
    if (this.props.locked) classnames.push('locked')
    //if (dupe) classnames.push('dupe')
    //if (error) classnames.push('wrong')

    return classnames.join(' ')
  }

  render() {
    return (
      <div
        className={this.classNames()}
        onClick={this.handleClick}
      />
    )
  }
}

const mapStateToProps = (state, props) => {
  return{
    locked: state.locked.filter(l => l[0] === props.x && l[1] === props.y).length > 0
}}

export default connect(mapStateToProps, { makeMove: move })(Square)

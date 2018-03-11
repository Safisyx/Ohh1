// src/containers/Board.js
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Square from '../components/Square'
import {duplicateRows, duplicateCols} from '../lib/game'
import './Board.css'

export class Board extends PureComponent {
  static propTypes = {
    board: PropTypes.arrayOf(
      PropTypes.arrayOf(PropTypes.number)
    ).isRequired,
    dupeRows: PropTypes.arrayOf(PropTypes.number),
    dupeCols: PropTypes.arrayOf(PropTypes.number)
  }

  renderRow = (row, index) => {
    return (
      <div key={index} className="row">
        {row.map(this.renderSquare(index))}
      </div>
    )
  }

  renderSquare = rowIndex => (value, index) => {
    const dupe = this.props.dupeRows.includes(rowIndex) ||
                 this.props.dupeCols.includes(index)
    return (
      <Square key={index} value={value} x={rowIndex} y={index}
      dupe={dupe}/>
    )
  }

  render() {
    return (
      <div className="Board">
        {this.props.board.map(this.renderRow)}
      </div>
    )
  }
}

const mapStateToProps = ({board}) => {
  //console.log('#######################');
  //console.log(board);
  //console.log(duplicateRows(board));
  //console.log('-----------------------');
  return {
    board,
    dupeRows: duplicateRows(board),
    dupeCols: duplicateCols(board)
}}
// Then pass it to connect:
export default connect(mapStateToProps)(Board)

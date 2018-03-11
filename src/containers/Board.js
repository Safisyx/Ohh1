// src/containers/Board.js
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Square from '../components/Square'
import {duplicateRows, duplicateCols, rows, cols, threeOrMoreInARow} from '../lib/game'
import './Board.css'

export class Board extends PureComponent {
  static propTypes = {
    board: PropTypes.arrayOf(
      PropTypes.arrayOf(PropTypes.number)
    ).isRequired,
    dupeRows: PropTypes.arrayOf(PropTypes.number),
    dupeCols: PropTypes.arrayOf(PropTypes.number),
    errorRows: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)),
    errorCols: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number))
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

    //console.log(this.props.errorRows);
    //console.log(this.props.dupeRows)
    const error = this.props.errorRows[rowIndex].includes(index) ||
                  this.props.errorCols[index].includes(rowIndex) ||
                  rows(this.props.board)[rowIndex].filter(r => r!==0 && r===value)
                                                  .length > this.props.board.length/2 ||
                  cols(this.props.board)[index].filter(c => c!==0 && c===value)
                                                  .length > this.props.board.length/2;
    //console.log('---------------------------');
    //console.log(rows(this.props.board)[rowIndex].filter(r => r!==0 && r===value));
    return (
      <Square key={index} value={value} x={rowIndex} y={index}
      dupe={dupe} error={error} />
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
  //console.log(rows(board).map(r => (threeOrMoreInARow(r))));
  //console.log('-----------------------');
  return {
    board,
    dupeRows: duplicateRows(board),
    dupeCols: duplicateCols(board),
    errorRows: rows(board).map(r => (threeOrMoreInARow(r))),
    errorCols: cols(board).map(c => (threeOrMoreInARow(c))),
}}
// Then pass it to connect:
export default connect(mapStateToProps)(Board)

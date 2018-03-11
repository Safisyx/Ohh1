// src/reducers/board.test.js
import { CREATE_GAME } from '../actions/types'


import board from './board'

describe('board reducer', () => {
  const reducer = board
  const initialState = [
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0]
  ]

  it('returns an empty array for the initial state', () => {
    expect(reducer()).toEqual(initialState)
  })



//  it('sets the initial state of the locked squares to an empty array', () => {
//    expect(reducer()).toEqual(initialState)
//  })

  describe(CREATE_GAME, () => {
    const board = [
      [0,1,1,0],
      [0,2,0,0],
      [1,0,0,0],
      [0,2,0,0]
    ]

    const locked = [
      [0,1],
      [0,2],
      [1,1],
      [2,0],
      [3,1]
    ]

    const action = {
      type: CREATE_GAME,
      payload: {
        board,
        locked
      }
    }

    it('returns the new locked positions', () => {
      expect(reducer(initialState, action)).toEqual(board)
    })
  })
})

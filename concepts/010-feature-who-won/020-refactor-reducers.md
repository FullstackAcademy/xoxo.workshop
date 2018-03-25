To make it easier to add a new property to state, let's do a bit of refactoring.

Our reducer is currently tracking
two state properties: `turn` and `board`. Let's refactor this big reducer
into two littler reducers:
  - `turnReducer(turn='X', action)` will just handle updating `turn`
  - `boardReducer(board=Map(), action)` will just handle updating `board`

Finally, write a combined reducer, which calls `turnReducer` and `boardReducer` to compute the next state.

<hint title="Solution: Refactored reducers">
<tonic>
const {Map} = require('immutable')

const MOVE = 'MOVE'

function turnReducer(turn='X', action) {
  if (action.type === MOVE)
    return turn === 'X' ? 'O' : 'X'
  return turn
}

function boardReducer(board=Map(), action) {
  if (action.type === MOVE)
    return board.setIn(action.coord, action.player)
  return board
}

function reducer(state={}, action) {
  return {
    board: boardReducer(state.board, action),
    turn: turnReducer(state.turn, action),
  }
}

reducer(undefined, {
  type: MOVE,
  coord: [1, 1],
  player: 'X',
})
</tonic>
</hint>

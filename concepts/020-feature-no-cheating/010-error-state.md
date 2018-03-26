Now that we have a function that figures out if an action is allowed,
let's wire it into our reducer.

Change our combined reducer to check `bad` before doing anything else.

If the specified `action` is bad given the current `state`, don't send it
to the other reducers! Instead, return a copy of the current state with
an `error` property on it, equal to the message returned by `bad`

<hint title="Solution">
<tonic>
function reducer(state={}, action) {
  const error = bad(state, action)
  if (error) return Object.assign({}, state, error)

  const nextBoard = boardReducer(state.board, action)
  const winnerState = winner(nextBoard)
  return {
    board: nextBoard,
    turn: turnReducer(state.turn, action),
    winner: winnerState
  }
}
</tonic>
</hint>
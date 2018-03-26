Now that we have a function that tells us if the game has been won,
we need to use it in our reducer to compute a new state property: `winner`.

An interesting catch here is that we the winner is *dependent* on the next
board state. That means we'll need to run the board reducer first,
to figure out what the board is going to look like, then pass that
new board into `winner` to compute the `winner` state.

<hint title="Solution">
<tonic>
function reducer(state={}, action) {
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

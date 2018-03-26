If we decide to represent board coordinates as an array of [row, col],
then our coordinates will naturally be key paths, which we can
use with `getIn` and `setIn`.

An empty board will be a Map with no entries.

<tonic>
const {Map} = require('immutable')
let board = Map()
</tonic>

When a player makes a move, we'll want to create a new board at
that coordinate. For example, if X moves to row 1, col 1, we'll
compute the new board as:

<tonic>
const {Map} = require('immutable')
let board = Map()
board = board.setIn([1, 1], 'X')
</tonic>

We'll need to store this information in the `MOVE` action.

<guide>You've considered what the `MOVE` action will look like</guide>

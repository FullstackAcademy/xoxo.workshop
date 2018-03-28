In order to detect end of game conditions (wins and draws),
we're going to write a function, called `winner`.

`winner` takes a board and returns,
  - 'X' if X has won
  - 'O' if O has won
  - null if the game is ongoing
  - 'draw' if the game is a draw

Think about how you might write this function.

<tonic>
const {Map} = require('immutable')

function winner(board) {
  // TODO
}

const ongoing = Map()
  .setIn([0, 0], 'X')
  .setIn([1, 0], 'O')
  .setIn([0, 1], 'X')
  .setIn([1, 1], 'O')

const xWins = ongoing
  .setIn([0, 2], 'X')

const oWins = ongoing
  .setIn([0, 0], 'O')
  .setIn([1, 1], 'O')
  .setIn([2, 2], 'O')


console.log('null?', winner(ongoing))
console.log('X?', winner(xWins))
console.log('O?', winner(oWins))
</tonic>

<guide>When you've considered an approach to writing `winner`. Remember that there are four ways to win: three in a row vertically, three in a row
horizontally, and the two diagonals. We'll go over a possible approach on the next page.</guide>

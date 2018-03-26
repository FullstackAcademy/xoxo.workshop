Our `bad` function is going to help us a lot here. To figure out
what moves can be made from a given state, we can start with a list of
*all* moves for the current `state.player`—literally, trying to move
into every square. Then we'll filter out all the `bad` moves.

In `./game/ai.js`, fill in the `moves` function.

<hint title="Solution">
<tonic>
import {move, bad} from '.'

const COORDS = [
  [0, 0], [0, 1], [0, 2],
  [1, 0], [1, 1], [1, 2],
  [2, 0], [2, 1], [2, 2],
]

export const moves = game => moves[game.turn]
  .filter(move => !bad(game, move))

moves.X = COORDS.map(coord => move('X', coord))
moves.O = COORDS.map(coord => move('O', coord))
</tonic>
</hint>

<guide>You've written a `moves` function</guide>
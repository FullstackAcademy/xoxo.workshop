In tic-tac-toe, there's really only one action a player
can take, and that's to make a move, marking a board position
with their marker (X or O).

The action will need to tell us which player is moving, and
where they're moving to:

* `MOVE`
  - type: "MOVE"
  - position: [row: 0..2, col: 0..2]
  - player: 'X' or 'O'

To ensure that our move actions have the appropriate form, we'll
write an *action creator* for moves. This is a function that takes 
and return an action representing that player marking that position.

<guide>You've written the move action creator in [`game/index.js`](./game/index.js)</guide>

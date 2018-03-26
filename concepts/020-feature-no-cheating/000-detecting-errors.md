At this point, there's nothing stopping me from overwriting a square
that's already been taken. X and O could go back and forth, marking square
`1,1` forever.

There's also the matter of invalid input. If I enter something totally daft:

```
{ winner: null, turn: 'O', board: Map { 1: Map { 1: "X" } } }
___
_X_
___
? O's move (row,col): asdf,asdf
{ winner: null,
  turn: 'X',
  board: Map { 1: Map { 1: "X" }, null: Map { null: "O" } } }
```

It doesn't break, particularly, but O has basically thrown away their move,
in addition to putting some garbage in the board—the input reader function
tries to set a coordinate of `NaN,NaN`, which the Map associates with `null`.

It's weird all around. Let's fix it.

# The `bad` function

We'll write a function called `bad(state, action)`. This function will
see if the `action` is valid in the given `state`.

If the action is valid, `bad` returns `null`.

Otherwise, `bad` returns a string, describing the problem.

Bad should check for various problems:
  - If `action.player` isn't `state.turn`, `bad` should return a
    message telling the player it's not their turn.
  - If `action.coord` isn't an array containing two integers between 0 and
    2, `bad` should return a message saying the position is invalid.
  - If the board already has `action.coord`, `bad` should return
    a message saying that square is already taken.

That's it!

<guide>You've written a `bad` function in game/index.js</guide>

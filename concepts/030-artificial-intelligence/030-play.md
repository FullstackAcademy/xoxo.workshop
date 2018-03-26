Finally, write the default exported function in `ai.js`.

This function takes a game state, scores all possible moves,
sorts those moves, and returns the best one.

<hint title="How will we associate a score with each move?">
I just went and made a copy of each `move` with another field, `score`.

<hint title="Solution">
<tonic>
state => moves(state)
  .map(move => Object.assign({}, move, {
    score: score(state, move)
  }))
</tonic>
</hint>
</hint>

<hint title="How do you sort by score?">
`sort` (the Array prototype method) takes a `comparator`, which
takes two values `a` and `b` and returns greater than 0 if a > b,
less than 0 if a < b, and 0.0 if a == b.

<hint title="Solution">
<tonic>
state => moves(state)
    .map(move => Object.assign({}, move, {
      score: score(state, move)
    }))
    .sort((a, b) => b.score - a.score)
    [0]
</tonic>
</hint>

<hint>

<guide>When you've written the play function</guide>
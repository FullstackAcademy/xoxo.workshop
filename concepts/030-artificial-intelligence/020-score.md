Score is, well, a bit trickier.

<tonic>
const score = (game, move) => {
  // Oh god what goes here?
}
</tonic>

The first thing we'll need to do is figure out what the
game looks like if we make that move. Fortunately, our `reducer`
returns exactly that information. This tells us a `future` state.

<tonic>
const score = (game, move) => {
  const future = reducer(game, move)
  // TODO
}
</tonic>

Let's handle the immediate cases:
  * Immediate wins (`future.winner === move.player`) should return a
    score of 1.0
  * Immediate draws should (`future.winner === 'draw'`) should return 
    a score of 0.0
  * Immediate losses are impossible—in xoxo, you can never lose on
    your turn (though you may lose immediately afterwards, on the next
    person's turn). We don't have to handle this.

This still leaves a tremendous morass of uncertainty. What do we do
when `future.winner` is `null`—that is, the game is still ongoing?

Well, what do *you* do when you play a strategy game? Generally, we follow a thought process something like this: "okay, if I move here, my opponent will move to this other spot, and then I'll move here..."

We *recurse*. That's how our `score` function is going to work.

If `future.winner` is `null`, we need to:
  1. Find all the moves that are possible from that future state
     (thankfully, we have a function that does this)
  2. Recursively score all of *those* moves. This will be the score as our    opponent sees it. That is, higher values are *worse* for us.
  3. Pick the best score (we assume that our opponent is not stupid,
     and will make the best move for themselves)
  4. Return that score, *negated*

We need to negate the score in step 4 because these future scores are for
our opponent. In other words, if one of our possible moves leads to a world
where our opponent has a move with a score of 1.0, we want to return -1.0 for that move—their win would be our loss.

<hint title="Solution: you can do the recursion in one line">
<tonic>
-Math.max(...moves(future).map(move => score(future, move)))
</tonic>
</hint>

<guide>You've written the `score` function</guide>
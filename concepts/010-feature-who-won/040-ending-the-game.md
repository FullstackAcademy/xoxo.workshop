Now that we have a `winner` on state, we can end the game when a winner
is detected.

Open up the game driver code in [index.js](./index.js). There are
currently two subscribers—one that prints the board, and another
that gets input.

Add a third, which prints an appropriate message and exits the game
when someone wins. You can use `process.exit(0)` to exit the game
successfully.

You should now be able to play a game and have it exit when someone wins!

You can, however, still cheat. We'll take care of that in the next section.
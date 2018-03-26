No matter what you do, there's going to be a lot of looping involved.

I found it easier to separate out one subproblem: checking to see if
some set of coordinates are completely owned by a single player.

I wrote a `streak` function, which takes a board and any number of coordinates:

<tonic>
function streak(board, firstCoord, ...remainingCoords) {
  // TOOD
}
</tonic>

Streak loops over the coordinates.

If all the specified coordinates are (1) defined, and (2) have
the same value, then streak returns that value.

Otherwise, it returns undefined.

Then, in my `winner` function, I call streak with coordinates
for each row, each column, and the diagonals. You can code this out (there's only three rows, three cols, and two diagonals), or you can
write a loop to handle the rows and columns.

After each call, I check and see if streak returned a value. If it did,
winner found! I return that value, which will be 'X' or 'O', specifying the
winner.

If I haven't returned after all that, I check to see if there are any
undefined spaces on the board. Another loop. You can use `hasIn` to check
to see if a space is occupied. If there are any unoccupied spaces,
I return null, signaling that the game isn't over yet.

Finally, if I still haven't returned, that means that nobody has won and
there are no empty spaces left on the board, which means I return `'draw'`.

<guide>
You've written a `winner` function in [game/index.js](./game/index.js)
</guide>
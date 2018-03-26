We're so close now! The last step is to make the AI play the game.

In our root `index.js`, we'll `import` our AI.

Then we have to write another function to `subscribe`to the store. It
can be a higher order function, like `getInput`, which takes a player
and returns a function that uses the AI to pick a move for that player
whenever it's their `turn`. (When it's not their turn, do nothing.)

Remove the `getInput` subscription for 'O' and replace it with a call to your
new AI function, and you should have a game with a worthy AI opponent.
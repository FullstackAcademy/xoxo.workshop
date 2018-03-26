Now the game keeps us from making invalid moves, but it does so silently.

Add another subscriber to the game driver code in `index.js`. All this
function needs to do is print `state.error` if it's defined.

Once that's done, you'll have a game that prevents cheating, applies
the rules, and notifies players if they try to do something illegal.

But you still need another person to play. In the extra credit, we'll
fix that by making an AI to play the game against you.
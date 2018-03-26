Making an AI is really easy.

For a given game state, we'll score all actions that are valid
for that game state. Then we just make the move with the highest
score.

I guess that leaves two questions:

   1. *How do we find all moves that are valid from a given game state?* Your `bad` function will be helpful here.
   2. *How do we score those moves?* Scores should be numbers, probably
   between -1.0 (for a loss), and 1.0 (for a win). This is the tricky bit,
   because for moves that don't end the game, it's not immediately clear
   how to score them.

Think about these questions before moving on. Don't start coding just yet.

<guide>When you have pondered these questions sufficiently.</guide>
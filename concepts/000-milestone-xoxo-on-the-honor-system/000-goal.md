Today, we're going to make [tic-tac-toe](https://en.wikipedia.org/wiki/Tic-tac-toe)
(also called noughts and crosses, or Xs and Os).

The starting point is [here](https://github.com/FullstackAcademy/xoxo).

Our first version will be a terminal app. Players will be able to:
- Take turns making moves
- See the board printed after each move

We *won't* have these features:
- The game won't keep players from making invalid moves.
  - In particular, nothing will prevent players from moving into
    a square that's already occupied.
- The game won't know when it's over—it's up to players to notice
  who won.
- We won't have AI.
- We won't have a web frontend.

We'll add these features later. Let's put together a simple game, played on
the honor system, first.

Here's an example of a play session:

```
___
___
___
? X's move (row,col): 1,1

___
_X_
___
? O's move (row,col): 2,2

___
_X_
__O
? X's move (row,col): 0,2

__X
_X_
__O
? O's move (row,col): 2,1

__X
_X_
_OO
? X's move (row,col): 2,0

__X
_X_
XOO
? O's move (row,col):
```

X has won the game. Our first version doesn't detect this—X's player has to notice
and start gloating.

We'll use [Redux](https://redux.js.org) to manage the state of the board.
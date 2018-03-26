Redux gives us a framework for thinking about the game rules, by
breaking the problem down into three parts:

- We have *state*, which will represent the current state of the game
- *Actions* are objects that describe changes to the game.    
- We have a *reducer*, which takes a state and an action
  and returns a new state.

To tie it all together, Redux gives us the *store*. The store holds a particular state,
and has a `dispatch` method, which takes an action, and uses your reducer to compute
the next state.

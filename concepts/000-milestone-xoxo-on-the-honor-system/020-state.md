For our MVP design, our game state needs to be able to answer two questions:
    1. whose turn is it?
    2. what's on the board?

We'll track the answers to these questions in an object like this:

  - `turn` — whose turn is it?
    - turn is a string: 'X' or 'O'
  - `board` — what's on the board?
    - board is an [Immutable Map](https://facebook.github.io/immutable-js/docs/#/Map).

# What's an immutable map?

An Immutable Map is much like a normal map (or JS object), only methods that *would* mutate
the map instead return a copy with those changes applied.

<tonic>
const {Map} = require('immutable')
const empty = Map()

const full = empty
  .set('hello', 'world')
  .set('x', 123)

console.log('full=', full)

// The original map is unchancged.
console.log('empty=', empty)
</tonic>

This behavior is perfect for Redux states, which are meant to be completely
immutable. The immutable library is smart enough to only make a copy of the keys that need
to change, reducing memory usage.

Immutable maps also have some very useful methods. In particular, you can set
deep values based on a key path. For example:

<tonic>
const {Map} = require('immutable')
Map().setIn(['hello', 'world'], 42)
</tonic>

This returns an immutable map with a single key, `"hello"`,
whose value is an immutable map with a single key, `"world"`,
whose value is 42. If we turned it into JSON, it would look like
this:

```js
{
  hello: {
    world: 42
  }
}
```

<guide>
You've considered how we can represent an xoxo board with an immutable map.
</guide>

# Representing moves

If we decide to represent board coordinates as an array of [row, col],
then our coordinates will naturally be key paths, which we can
use with `getIn` and `setIn`.

An empty board will be a Map with no entries.

<tonic>
const {Map} = require('immutable')
let board = Map()
</tonic>

When a player makes a move, we'll want to create a new board at
that coordinate. For example, if X moves to row 1, col 1, we'll
compute the new board as:

<tonic>
const {Map} = require('immutable')
let board = Map()
board = board.setIn([1, 1], 'X')
</tonic>

We'll need to store this information in the `MOVE` action.

<guide>You've considered what the `MOVE` action will look like</guide>

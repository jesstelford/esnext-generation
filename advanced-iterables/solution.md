----

# Solution

For comparison, here is a possible solution, so you can compare notes:

```js
module.exports = function generate(isEven) {
  var num;

  if (isEven) {
    num = 0;
  } else {
    num = -1;
  }

  var myIterator = {
    next: function(swap) {

      num += (swap ? 1 : 2);

      return {
        value: num
      }

    }
  }

  return myIterator;
}
```

## Extra Credit

How could `generate()` be rewritten to accept an infinite Iterable (that gives
the set of all positive integers), and continue to return just the odd or even
numbers?

*Hint*: Remember you can call `.next()` as many times as you like on the
passed-in Iterable's Iterator.

----

# Next lesson

Execute `$ADVENTURE_COMMAND` to move on to the next lesson: _Introduction To
Generators_.

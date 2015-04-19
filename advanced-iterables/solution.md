----

# Solution

For comparison, here is a possible solution, so you can compare notes:

```js
module.exports = function generate(isEven) {
  var num,
      done = false;

  if (isEven) {
    num = 0;
  } else {
    num = -1;
  }

  var myIterator = {
    next: function() {

      num += 2;

      return {
        value: num,
        done: false
      }

    }
  }

  return myIterator;
}
```

## Extra Credit

Can you add the ability to swap between even <-> odd iterators mid-iteration?

*Hint*: Accept a parameter in the `.next()` function to do the swap.

----

# Next lesson

Execute `$ADVENTURE_COMMAND` to move on to the next lesson: _Introduction To
Generators_.

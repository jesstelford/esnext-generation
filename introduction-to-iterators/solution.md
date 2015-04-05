----

# Solution

For comparison, here is a possible solution, so you can compare notes:

```js
module.exports = function count() {
  var num = 0,
      done = false;

  var myIterator = {
    next: function() {

      if (num < 10) {
        num++;
      } else {
        done = true;
      }

      return {
        value: num,
        done: done
      }

    }
  }

  return myIterator;
}
```

## Extra Credit

Can you rewrite your solution to accept a single parameter `maxNum`, the final
number that should be returned, which defaults to `10` if not set?

----

# Next lesson

Execute `$ADVENTURE_COMMAND` to move on to the next lesson: _Built In Iterators_.

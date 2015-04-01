## Solution

For comparison, here is an implementation using `forEach`, so you can compare notes:

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

## Next lesson

Execute `$ADVENTURE_COMMAND` to move on to the next lesson: Built In Iterators.

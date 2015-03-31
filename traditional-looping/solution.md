## Solution

For comparison, here is an implementation using `forEach`, so you can compare
notes:

```js
module.exports = function max(arr) {

  var largest = 0;

  arr.forEach(function(value) {
    if (value > largest) {
      largest = value;
    }
  });

  return largest;
}
```

## Next lesson

Execute `$ADVENTURE_COMMAND` to move on to the next lesson: Introduction to es6 Iterators.

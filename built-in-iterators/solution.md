# Solution

For comparison, here is an implementation using `for...of`, so you can compare
notes:

```js
module.exports = function filterForNumbers(iterable) {

  var result = [];

  for(var i of iterable) {
    if (typeof i == 'number') {
      result.push(i);
    }
  }

  return result;
}
```

----

# Next lesson

Execute `$ADVENTURE_COMMAND` to move on to the next lesson: _Advanced Iterables_.

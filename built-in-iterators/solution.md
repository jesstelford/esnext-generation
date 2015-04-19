# Solution

For comparison, here is an implementation using `for(... of ...){}`, so you can
compare notes:

```js
module.exports = function max(collection) {

  var largest = 0;

  for(var value of collection) {
    if (value > largest) {
      largest = value;
    }
  };

  return largest;
}
```

----

# Next lesson

Execute `$ADVENTURE_COMMAND` to move on to the next lesson: _Advanced Iterables_.

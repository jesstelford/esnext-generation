----

# Solution

For comparison, here is a possible solution, so you can compare notes:

```js
module.exports = function *generate() {
  var num = 0,
      multiplier = 1;

  while(true) {
    num++;
    multiplier = yield num * multiplier;
    if (!multiplier) {
      multiplier = 1;
    }
  }
}
```

----

# Next lesson

Execute `$ADVENTURE_COMMAND` to move on to the next lesson: _TODO_.

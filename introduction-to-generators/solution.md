----

# Solution

For comparison, here is a possible solution, so you can compare notes:

```js
module.exports = function *generate(isEven) {
  var num = isEven ? 0 : -1;

  while(true) {
    num += 2;
    yield num;
  }
}
```

----

# Next lesson

Execute `$ADVENTURE_COMMAND` to move on to the next lesson: _TODO_.

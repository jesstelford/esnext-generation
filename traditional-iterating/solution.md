----

# Solution

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

_Note: The above solution does not include error checking or negative numbers
for the sake of brevity._

## Extra Credit

Can you rewrite your solution to use the other type of iteration (either
`for(...){}` or `forEach`)?

----

# Next lesson

Execute `$ADVENTURE_COMMAND` to move on to the next lesson: _Introduction to
Iterators_.

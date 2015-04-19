# Passing Args To Yield

Another interesting and powerful ability of Iterators is passing arguments into
`.next()` (touched on during **Extra Credit** in _Advanced Iterables_).

For a regular Iterable which defines its own Iterator and `.next()` method, we
can accept the argument as a regular function parameter:

```js
module.exports = function allIntegers() {
  var num = 0;

  var myIterator = {
    next: function(reset) {

      if (reset) {
        num = 0;
      }

      num++

      return {
        value: num,
        done: false
      }

    }
  }

  return myIterator;
}
```

Here, we pass the `reset` argument into `.next()` like so:

```js
var it = allIntegers();
console.log(it.next());     // {value: 1, done: false}
console.log(it.next());     // {value: 2, done: false}
console.log(it.next());     // {value: 3, done: false}
console.log(it.next(true)); // {value: 1, done: false}
console.log(it.next());     // {value: 2, done: false}
```

Since generators return an Iterator, arguments can still be passed into the
`.next()` as above, but to utilise these arguments _within the generator_ is a
little bit different. We must listen to the return value of a call to `yield`:

```js
function *generate() {
  var num = 0,
      reset = false;

  while(true) {
    num += 1;
    reset = yield num;
    if (reset) {
      num = 0;
    }
  }
}
```

_(Note: This is a slightly modified example from Introduction To Generators)_

There is one important difference between the return value of `yield` and a
regular Iterator: a generator's Iterator must have `.next()` called at least
once without any parameters.

Put another way: The expression `reset = yield num;` is evaluated right-to-left.
The first call to `.next()` will execute up to and including `yield num;`, at
which point execution of the generator will halt, _then_ the following call to
`.next(<value>)` will evaluate `reset = ...`, capturing the `<value>` passed in.

----

# Your Mission

Write a generator, `*multiplier()` which yields all the integers from 1 to
Infinity multiplied by a value passed in to the `.next()` call.

That is, your generator should satisfy the following tests:

```js
var it = multiplier();
console.log(it.next().value) // 1
console.log(it.next().value) // 2
console.log(it.next(2).value) // 6 (2 * 3)
console.log(it.next(5).value) // 20 (5 * 4)
console.log(it.next(3).value) // 15 (3 * 5)
// ... etc
```

Complete the following boilerplate, then execute
`$ADVENTURE_COMMAND verify <your-file.js>` to verify your solution.

```js
module.exports = function *multiplier() {
  // `yield` all integers multiplied by the value passed in via `.next()`

}
```

----

# Resources

 * Passing Arguments To Iterators: http://bit.ly/js-ues6-passing-args-to-iterators
 * Generators: http://bit.ly/js-function-asteriks

# Advanced Iterables

A lot of thought went into designing the Iteratabls specificatoin: The `.next()`
method was chosen to allow both general usage iteration (as we have seen in the
previous lessons), but also to enable more advanced techniques.

The creation of Iterables is an area with a lot of flexibility. In _Introduction
To Iterators_, we created an Iterable that iterated a fixed set of numbers.
What if we wanted to create an Iterable that iterated a dynamic set of
numbers, or any other data?

Both the function which creates the Iterable (`max()` in _Introduction To
Iterators_), and the `.next()` method on the Iterator itself can accept any
arbitrary parameters - they're only functions after all. This allows us to build
up dynamic Iterables.

----

# Your Mission

Write a function to generate iterators, `generate()`, that returns an infinite
Iterable. ie; an Iterable that never returns `done: true`.

The Iterable should return all even numbers >= 2 if the first parameter to
`generate()` is `true`, and return all odd numbers >= 1 if the first parameter
to `generate()` is `false`.

Complete the following boilerplate, then execute
`$ADVENTURE_COMMAND verify <your-file.js>` to verify your solution.

```js
module.exports = function generate(isEven) {
  // return an Iterable for even numbers if isEven is true
  // or, return an Iterable for odd numbers if isEven is false

}
```

----

# Resources

 * What Are Iterators?: http://bit.ly/js-ues6-iterators
 * Iterable Protocol: http://bit.ly/js-iteration-protocol

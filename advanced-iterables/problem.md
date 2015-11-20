# Advanced Iterables

A lot of thought went into designing the Iteratabls specification: The `.next()`
method was chosen to allow both general usage iteration (as we have seen in the
previous lessons), but also to enable more advanced techniques.

The creation of Iterators is an area with a lot of flexibility. In _Introduction
To Iterators_, we created an Iterator that iterated a fixed set of numbers.
What if we wanted to create an Iterator that iterated a dynamic set of numbers,
or any other data?

Both the function which creates the Iterator, and the `.next()` method on the
Iterator itself can accept any arbitrary parameters - they're only functions
after all.

This is where the power of Iterators lies: usage of `.next()` combined with the
ability to generate dynamic sets of numbers or data gives us a unified interface
for defining not only finite number sequences, but also abstract sequences, and
operations on those abstract sequences.

----

# Your Mission

Write a function to generate iterators, `generate()`, that returns an infinite
Iterator. i.e.; an Iterator that never returns `done: true`[1].

The Iterator should return all even numbers >= 2 if the first parameter to
`generate()` is `true`, and return all odd numbers >= 1 if the first parameter
to `generate()` is `false`.

Also add the ability to swap between even <-> odd iterators mid-iteration by
accepting a bool `swap` to `.next()`. For example, if the last call to `.next()`
returned 2, calling `.next(true)` immediately afterward should return 3.

Copy this boilerplate to a new file and complete with your solution, then
execute `$ADVENTURE_COMMAND verify <your-file.js>` to verify it.

```js
module.exports = function generate(isEven) {
  // return an Iterator for even numbers if isEven is true
  // or, return an Iterator for odd numbers if isEven is false
  // If `.next(swap)` receives `true`, swap between even <-> odd

}
```

## Notes

 * [1]: If the key `done` is left off, it is assumed to be `false`.

----

# Resources

 * What Are Iterators?: http://bit.ly/js-ues6-iterators
 * Iterable Protocol: http://bit.ly/js-iteration-protocol

# Built-In Iterators

## Iterating Arrays Using .forEach()

Every array has methods on its prototype, allowing iteration of its numeric keys
(aka: array indexes). The most simplest in form is the `.forEach()` method which
very closely mimics the behaviour of the traditional `for` construct.

## Iterating Objects Using for...in

The `for...in` construct allows a shorthand approach to iteration of Object keys
without having to worry about holes (non-contigious numeric keys), non-numeric
keys, or if the key is on the object directly, or on the prototype.

## Iterating Iterables Using `for...of`

Instead of using two different methods to iterate depending on the type (Object
or Array), ES6 provides a new construct `for...of`[1], allowing iteration over
_any_ collection that has an Iterator!

Arrays, Objects, and the new ES6 Map & Set collections all provide these
built-in iterators. Any collection which provides an iterator is called an
_Iterable_.  For example:

```js
for(var i of [1, 2, 3]) {
  console.log(i);
}
// Output: 1 2 3
```

Iterables expose their Iterator via the key `Symbol.iterator`, allowing the
`for...of` construct access to call `.next()` for us.

# Notes

 * [1]: not to be confused with iterating over objects via `for...in`

----

# Your Mission

Write a function `max()` to return the largest value in an Iterable collection
of numbers.

Copy this boilerplate to a new file and complete with your solution, then
execute `$ADVENTURE_COMMAND verify <your-file.js>` to verify it.

```js
module.exports = function max(collection) {
  // return largest value in collection
}
```

----

# Resources

 * .forEach(): http://bit.ly/js-forEach
 * for...in: http://bit.ly/js-for-in
 * Iterables and for...of: http://bit.ly/js-ues6-iterables
 * Iterable Protocol: http://bit.ly/js-iteration-protocol

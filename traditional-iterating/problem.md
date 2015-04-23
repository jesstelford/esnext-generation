# ESNext Generation Interactive Workshop

Javascript: The final frontier.
In this journey, we will explore the strange new worlds of ESNext's Iterators
and Generators.
We will seek out new ways to loop; new iterations.
We will boldly code what no one has coded before!

----

# Prerequisites

Make sure you are using node.js >= 0.11.4 (or any version of iojs), otherwise
your generator code may not execute correctly.

----

# Traditional Iterating

Javascript, being a C-like language, has the traditional `for(...){}` loop
construct. Over time the language has expanded to contain further looping
constructs to cover Objects and Arrays:

## Objects

The `for(... in ...){}` construct allows a shorthand approach to enumeration of
Object values without having to worry about collections with holes or
non-numeric keys.

## Arrays

Traditionally there is no shorthand equivalent of `for(... in ...){}` for
Arrays, instead requiring a special function
`Array.prototype.forEach(function(){})` to allow enumeration of indexes and
values.

Internally, `forEach` can be thought of as using a traditional `for(...){}`
loop, executing the given function once per array index.

----

# Your Mission

Create a function, `max()`, which returns the largest value in an array. Use
either `for(..){}` or `forEach` to achieve the looping.

Complete the following boilerplate, then execute
`$ADVENTURE_COMMAND verify <your-file.js>` to verify your solution.

```js
module.exports = function max(arr) {
  // return largest value in arr
}
```

----

# Resources

 * for(...){}: http://bit.ly/js-for
 * for(... in ...){}: http://bit.ly/js-for-in
 * Array.prototype.forEach: http://bit.ly/js-forEach

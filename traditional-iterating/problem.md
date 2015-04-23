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

JavaScript has evolved to include more convenient features for iterating over
its built-in collection datatypes past the traditional `for(...){}`.

## Iterating Objects Using for...in

The `for(... in ...){}` construct allows a shorthand approach to iteration of
Object values without having to worry about collections with holes or
non-numeric keys.

## Iterating Arrays Using forEach

Traditionally there is no shorthand equivalent of `for(... in ...){}` for
Arrays, instead requiring a special function
`Array.prototype.forEach(function(){})` to allow iteration of indexes and
values.

Internally, `forEach` can be thought of as using the traditional `for(...){}`,
executing the given function once per array index.

----

# Your Mission

Create a function, `max()`, which returns the largest value in an array. Use
either `for(..){}` or `forEach` to achieve the iteration.

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

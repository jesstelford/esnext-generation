# ESNext Generation Interactive Workshop

Javascript: The final frontier.
In this journey, we will explore the strange new worlds of ES6 Iterators
and Generators.
We will seek out new ways to loop; new iterations.
We will boldly code what no one has coded before!

----

# Prerequisites

Make sure you are using node.js >= 0.11.4 (or any version of iojs), otherwise
your generator code may not execute correctly.

----

# Introduction To Iterators

A familiar concept in many other languages, Iterators have finally landed as a
new Javascript feature in the ES6 standard.

"_Iterators are nothing more than objects with a certain interface._"[1] That
interface consists of a single method:

`next()` **->** `{value: <mixed>, done: <boolean>}`

* `value` contains the next item in the Iterator's collection.
* `done` is true when the Iterator's collection is exhausted.

Every time `next()` is called, the Iterator's collection is advanced one more
item, and that item is returned as the `value`. Once all the items in the
collection are exhasued, `value` will be the Iterator's "return value", and
`done` will be `true`. All subsequent calls to `next()` will have the same
result.

While Iterators may appear overly verbose, we will learn in later lessons this
verbosity can be excellently hidden, and provides for complex use cases.

----

# Your Mission

Create a function, `count()`, which returns an Iterator that returns the numbers
1, 2, 3, ... etc, up to 10.

Copy this boilerplate to a new file and complete with your solution, then
execute `$ADVENTURE_COMMAND verify <your-file.js>` to verify it.

```js
module.exports = function count() {

  var myIterator = {
    next: function() {

      // complete me

    }
  }

  return myIterator;
}
```

----

# Resources

 * [1]: http://bit.ly/js-ues6-iterators
 * Iterable Protocol: http://bit.ly/js-iteration-protocol

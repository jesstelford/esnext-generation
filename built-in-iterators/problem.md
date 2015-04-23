# Built In Iterators

As we learned in _Traditional Iterating_, the `forEach` method of arrays can be
used to enumerate their values. Internally, it can be thought of as using the
traditional `for(...){}`.

What if internally, the language used Iterators?

Es6 does exactly this via a new iteration construct `for(... of ...){}`[1], which
allows iterating over _any_ collection that has an Iterator!

Arrays, Objects, and the new es6 Map & Set collections all provide built in
iterators. They are called _Iterables_. For example:

```js
for(var i of [1, 2, 3]) {
  console.log(i);
}
// Output: 1 2 3
```

Iterables expose their Iterator via the key `Symbol.iterator`, allowing the
`for(... of ...){}` construct access to call `.next()` for us.

# Notes

 * [1]: not to be confused with iterating over objects via `for(... in ...){}`

----

# Your Mission

Rewrite your function, `max()`, from _Traditional Iterating_ to return the largest
value in an Iterable collection of numbers.

Complete the following boilerplate, then execute
`$ADVENTURE_COMMAND verify <your-file.js>` to verify your solution.

```js
module.exports = function max(collection) {
  // return largest value in collection
}
```

----

# Resources

 * Iterables and for-of: http://bit.ly/js-ues6-iterables
 * Iterable Protocol: http://bit.ly/js-iteration-protocol

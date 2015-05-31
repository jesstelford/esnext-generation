# Introduction To Generators

So far we've seen as Iterators advance from being simple built-in constructs (on
Array, Set, Map, etc) to more complex dynamic constructs (infinite number
sequences, etc), the code can begin to get more verbose, with lots of
boilerplate required.

Wouldn't it be nice if there was an easier way to use dynamic iterators?
Something that could hide all the minutiae of creating an iterator and calling
`.next()` on it?

Say hello to **Generators**.

Generators take what we learned in _Advanced Iterables_, and wraps them in some
new ES6 syntactic sugar. Instead of returning an object containing a `.next()`
method which returns the value, we use the new `yield` keyword to return the
value directly from within the generator.

To specify a generator, you add an asteriks `*` after the `function` keyword.

For example, a generator which returns all integers from 1 to Infinity can be
written as:

```js
1. function *generate() {
2.   var num = 0;
3. 
4.   while(true) {
5.     num += 1;
6.     yield num;
7.   }
8. }
```

Notice we have done away with all the `.next()` boilerplate, and replaced it
with the `yield` keyword to return the value. Behind the scenes, an Iterator is
generated for us (hence the name _Generators_), which has all the regular
properties of an Iterator (`.next()`, etc).

## `yield`

`yield` is essentially a replacement for having to explicitly return an object
with a `.next()`. When executed, it will return the given value, and halt
execution of the generator function. As soon as `.next()` is called on the
generator's Iterator, execution will continue from exactly where `yield` left
off.

To execute the above example is the same as for any Iterator; you can use it
inside a `for(... of ...)` construct:

```js
for(var i of generate()) {
  console.log(i); // 1 2 3 4 5 ... Infinity
}
```
_(remember `for(... of ...)` calls `.next()` for us internally)_

So, in our example, the code would be evaluated line by line as:

```
num = 0;     // line 2
while(true); // line 4
num = 1;     // line 5
yield 1;     // line 6. Execution halts here. 1 is returned
// When `.next()` is called on the iterator, execution would continue from line 6
while(true); // line 4
num = 2;     // line 5
yield 2;     // line 6. Execution halts here. 2 is returned
// ... and so on every time `.next()` is called
```

By replacing the `.next()` and the cumbersome boilerplate with two new peices of
syntactic sugar we have a readable, easy to use function which creates
Iterators.

----

# Your Mission

Rewrite the function we created in _Advanced Iterables_ to be a generator: It
must accept the same parameter `isEven`, and return the set of all even or odd
numbers. Don't worry about the `swap` argument this time, we will cover that next.

Copy this boilerplate to a new file and complete with your solution, then
execute `$ADVENTURE_COMMAND verify <your-file.js>` to verify it.

```js
module.exports = function *generate(isEven) {
  // `yield` either odd or even numbers based on `isEven`

}
```

----

# Resources

 * What Are Iterators?: http://bit.ly/js-ues6-iterators
 * Generators: http://bit.ly/js-function-asteriks

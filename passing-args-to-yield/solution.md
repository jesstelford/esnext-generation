----

# Solution

For comparison, here is a possible solution, so you can compare notes:

```js
module.exports = function *generate() {
  var num = 0,
      multiplier = 1;

  while(true) {
    num++;
    multiplier = yield num * multiplier;
    if (!multiplier) {
      multiplier = 1;
    }
  }
}
```

----

# Complete!

Congratulations, you've completed the `$ADVENTURE_COMMAND` workshop!

You're excellent :)

----

# Next Steps

## learn-generators Workshop

For more advanced usage (and to re-iterate some topics from this set of lessons), see the `learn-generators` workshop:

```bash
$ npm install -g learn-generators
$ learn-generators
```

Now that you know the history of how Iterators and Generators came to be, and
how to use them in the real-world, `learn-generators` will take you deeper into
some interesting use cases such as: making async code look sync; catching errors
in generators, and; using ES6 Promises with generators.

## Share this workshop

If you enjoyed this workshop, please share it with other Javascript developers:

 * Facebook: https://www.facebook.com/sharer/sharer.php?u=https://www.npmjs.com/package/esnext-generation
 * Twitter: https://twitter.com/home?status=An%20excellent%20way%20to%20learn%20about%20Generators%20in%20ES6:%20https://www.npmjs.com/package/esnext-generation%0Aby%20%40jesstelford
 * Google+: https://plus.google.com/share?url=https://www.npmjs.com/package/esnext-generation

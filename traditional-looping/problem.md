# Traditional Looping

Javascript, being a C-like language, has the traditional `for(...){}` loop construct.

## Objects

The `for(... in ...){}` construct takes looping one step further, allowing enumeration of Object values.

## Arrays

The `Array.prototype.forEach(function() {})` method does the same for Arrays, allowing enumeration of indexes and values.

Internally, the `forEach` method can be though of as using a traditional `for(...){}` loop, executing the given function once per array index.

## Your Task

Create a function, `max()`, which returns the largest value in an array.

Complete the following boilerplate, then execute `$ADVENTURE_COMMAND verify <your-file.js>` to verify your solution.

```js
module.exports = function max(arr) {
  // return largest value in arr
}
```

### Resources

 * forEach: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

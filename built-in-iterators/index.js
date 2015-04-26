var path = require('path'),
    problem = require('../problem');

module.exports = {
  title: 'Built In Iterators',
  problem: problem(__dirname, function (args, t) {
    var solution = require(path.resolve(args[0]));
    t.equal(typeof solution, 'function', 'you exported a function');

    t.deepEqual(
      solution([1, 'foo', 3, {bar: 4}]),
      [1, 3],
      "filterForNumbers([1, 'foo', 3, {bar: 4}]) == [1, 3]"
    );

    t.deepEqual(
      solution(new Set(['a', -34, []])),
      [-34],
      "filterForNumbers(new Set(['a', -34, []])) == [-34]"
    );

    t.end();
  })
}

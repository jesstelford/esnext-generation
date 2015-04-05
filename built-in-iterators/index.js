var path = require('path'),
    problem = require('../problem');

module.exports = {
  title: 'Built In Iterators',
  problem: problem(__dirname, function (args, t) {
    var solution = require(path.resolve(args[0]));
    t.equal(typeof solution, 'function', 'you exported a function');

    t.equal(solution([1, 2, 3, 4]), 4, 'max([1, 2, 3, 4]) == 4');
    t.equal(solution(new Set([1, 2, 3, 4])), 4, 'max(new Set([1, 2, 3, 4])) == 4');

    t.end();
  })
}

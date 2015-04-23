var path = require('path'),
    problem = require('../problem');

module.exports = {
  title: 'Traditional Iterating',
  problem: problem(__dirname, function (args, t) {
    var solution = require(path.resolve(args[0]));
    t.equal(typeof solution, 'function', 'you exported a function');

    t.equal(solution([1, 2, 3, 4]), 4, 'max([1, 2, 3, 4]) == 4');
    t.equal(solution([4, 3, 2, 1]), 4, 'max([4, 3, 2, 1]) == 4');
    t.equal(solution([2, 4, 3, 1]), 4, 'max([2, 4, 3, 1]) == 4');
    t.equal(solution([2, 4, 4, 1]), 4, 'max([2, 4, 4, 1]) == 4');

    t.end();
  })
}

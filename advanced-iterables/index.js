var path = require('path'),
    problem = require('../problem');

function testIt(tape, result, value, done) {
  tape.deepEqual(
    result,
    {value: value, done: done},
    'iterator.next().value == {value: ' + value + ', done: ' + done + '}'
  );
}

function testRange(tape, solution, isEven, min, max) {

  var tester = testIt.bind(null, tape),
      iterator,
      result;

  iterator = solution(isEven);

  tape.equal(
    typeof iterator.next,
    'function',
    'returns an ' + (isEven ? 'even' : 'odd') + ' iterator with .next()'
  );

  for (var i = min; i <= max; i += 2) {
    result = iterator.next();
    tester(result, i, false);
  }
}

module.exports = {
  title: 'Advanced Iterables',
  problem: problem(__dirname, function (args, t) {

    var solution = require(path.resolve(args[0]));

    t.equal(typeof solution, 'function', 'you exported a function');

    testRange(t, solution, true, 2, 10);
    testRange(t, solution, false, 1, 9);

    t.end();
  })
}

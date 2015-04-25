var path = require('path'),
    problem = require('../problem');

function testIt(tape, result, value, done) {
  tape.deepEqual(
    result,
    {value: value, done: done},
    'iterator.next().value == {value: ' + value + ', done: ' + done + '}'
  );
}

module.exports = {
  title: 'Introduction To Iterators',
  problem: problem(__dirname, function (args, t) {

    var solution = require(path.resolve(args[0])),
        tester = testIt.bind(null, t),
        iterator = {},
        result;

    t.equal(typeof solution, 'function', 'you exported a function');

    solution(iterator);

    t.equal(typeof iterator.next, 'function', 'returns an iterator with .next()');

    for (var i = 1; i <= 10; i++) {
      result = iterator.next();
      tester(result, i, false);
    }

    result = iterator.next();
    t.equal(result.done, true, 'iterator.next().done == true');

    t.end();
  })
}

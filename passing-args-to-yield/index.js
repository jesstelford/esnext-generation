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
  title: 'Passing Args To Yield',
  problem: problem(__dirname, function (args, t) {

    var solution = require(path.resolve(args[0])),
        tester = testIt.bind(null, t),
        iterator,
        result;

    t.equal(typeof solution, 'function', 'you exported a generator');

    iterator = solution();

    tester(iterator.next(), 1, false);
    tester(iterator.next(), 2, false);
    tester(iterator.next(2), 3 * 2, false);
    tester(iterator.next(5), 4 * 5, false);
    tester(iterator.next(3), 5 * 3, false);

    t.end();
  })
}

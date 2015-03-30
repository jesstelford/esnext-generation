var msee = require('msee'),
    path = require('path'),
    verify = require('adventure-verify'),
    problem = require('../problem');

module.exports = problem(__dirname, function (args, t) {
    var f = require(path.resolve(args[0]));
    t.equal(typeof f, 'function', 'you exported a function');
    t.equal(f(2,3), 6, '2 * 3 = 6');
    t.equal(f(1,1), 1, '1 * 1 = 1');
    t.equal(f(0.5,0.5), 0.25, '0.5 * 0.5 = 0.25');
    t.end();
});

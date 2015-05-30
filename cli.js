#!/usr/bin/env node
'use strict'

var spawn = require('child_process').spawn,
    path = require('path');

// add --harmony flag + pass-through args to main runner.js
var args = ['--harmony', './runner.js'].concat(process.argv.slice(2));

var childProcess = spawn('node', args, {
  stdio: 'inherit'
});

childProcess.on('exit', function(code) {
  process.exit(code);
});

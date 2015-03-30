#!/usr/bin/env node
'use strict';

var packageJson = require('./package.json'),
    adventure = require('adventure');

var shop = adventure(packageJson.name);

shop.add('lesson 1', function () { return require('./lesson-1') });
/* shop.add('lesson 2', function () { return require('./lesson-2') }); */

shop.execute(process.argv.slice(2));

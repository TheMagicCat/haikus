#!/usr/bin/env node
const Haikunator = require('haikunator');

const haikunator = new Haikunator({ defaults: { tokenLength: 0 } });

console.log(haikunator.haikunate());
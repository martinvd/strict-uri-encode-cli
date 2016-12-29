#!/usr/bin/env node
const strictUriEncode = require('strict-uri-encode');
const meow = require('meow');
const getStdin = require('get-stdin');

const cli = meow(`
  Usage
    $ strict-uri-encode <string>
    $ echo <string> | uri-encode
  Example
    $ strict-uri-encode unicorn!foobar
    unicorn%21foobar
`);

const input = cli.input.join('') || '';

function init(input) {
  console.log(strictUriEncode(input));
}

if (input) {
  init(input);
} else {
  getStdin().then(init);
}

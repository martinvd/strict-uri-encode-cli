# strict-uri-encode-cli [![Build Status](https://travis-ci.org/martinvd/strict-uri-encode-cli.svg?branch=master)](https://travis-ci.org/martinvd/strict-uri-encode-cli)

> A stricter URI encode adhering to [RFC 3986](http://tools.ietf.org/html/rfc3986)

## Install

```
$ npm install -g strict-uri-encode-cli
```

## Usage

```
$ strict-uri-encode --help

  Usage
    $ strict-uri-encode <string>
    $ echo <string> | strict-uri-encode

  Example
    $ strict-uri-encode unicorn!foobar
    unicorn%21foobar
```

## Related

* [strict-uri-encode](https://github.com/kevva/strict-uri-encode) - API for this module

## License

MIT © [Martin van Driel](https://github.com/martinvd)

# http-single-serve

> ⚙️ HTTP server for use with single page applications.

[![NPM Version](http://img.shields.io/npm/v/http-single-serve.svg?style=flat)](https://www.npmjs.org/package/http-single-serve)

## Install

```bash
$ npm install http-single-serve
```

## Usage

```javascript
const http = require('http-single-serve');

http({
    port: process.env.PORT || 5000,
    root: 'dist/',
    entry: 'index.html',
});
```

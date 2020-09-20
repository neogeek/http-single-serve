const { extname, join } = require('path');
const { existsSync, readFileSync } = require('fs');
const { createServer } = require('http');

const { contentType } = require('mime-types');

const server = ({ port, root = 'dist/', entry = 'index.html' }) =>
    createServer((req, res) => {
        const path = join(
            process.cwd(),
            root,
            req.url.match(/\.[a-z]+$/) ? req.url : entry
        );

        if (existsSync(path)) {
            res.writeHead(200, { 'Content-Type': contentType(extname(path)) });
            res.end(readFileSync(path));
        } else {
            res.writeHead(404, { 'Content-Type': contentType(extname(path)) });
            res.end();
        }
    }).listen(port);

module.exports = server;

const { extname, join } = require('path');
const { existsSync, readFileSync } = require('fs');
const { createServer } = require('http');

const { contentType } = require('mime-types');

const server = ({ port, root = 'dist/', entry = 'index.html' }) =>
    createServer((req, res) => {
        let path = join(process.cwd(), root, entry);

        if (req.url.match(/\.[a-z]+$/)) {
            path = join(process.cwd(), root, req.url);
        }

        if (existsSync(path)) {
            res.writeHead(200, { 'Content-Type': contentType(extname(path)) });
            res.end(readFileSync(path));
        } else {
            res.writeHead(404, { 'Content-Type': contentType(extname(path)) });
            res.end();
        }
    }).listen(port);

module.exports = server;

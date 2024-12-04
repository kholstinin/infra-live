const zlib = require('node:zlib');
const fs = require('node:fs');
const stream = require('node:stream');

const gzip = zlib.createGzip();
const source = fs.createReadStream('data.txt');
const destination = fs.createWriteStream('data.txt.gz');

source
    .pipe(gzip)
    .pipe(destination);

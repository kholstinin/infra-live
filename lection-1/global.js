const fs = require('node:fs');

const originalFunction = fs.readFileSync.bind(null);

fs.readFileSync = function(...args) {
    console.log('call read', args);
    return originalFunction(...args);
}

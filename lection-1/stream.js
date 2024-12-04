const fs = require('node:fs');

const stream = fs.createReadStream('./data.json', {highWaterMark: 16});

stream.on('data', (chunk) => {
  console.log(`chunk: ${chunk.toString()}`);
});

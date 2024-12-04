const https = require('https');

https.get('https://httpbin.org/uuid', (res) => {
  const data = [];
  res.on('data', chunk => {
    data.push(chunk);
  });

  res.on('end', () => {
    console.log('Response ended: ');
    console.log(data.toString());
  })
}).on('error', err => {
    console.log('Error: ', err);
  });

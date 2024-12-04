const {exec} = require('node:child_process');

exec('ls', (err, stdout) => {
    console.log(stdout);
});

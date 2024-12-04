const fg = require('fast-glob');

fg.glob('*.txt')
    .then((result) => {
        console.log(result);
    })

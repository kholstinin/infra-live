fetch('https://httpbin.org/uuid')
    .then((res) => res.json())
    .then((result) => {
        console.log(result);
    })

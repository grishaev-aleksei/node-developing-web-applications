const fs = require('fs');

fs.rename('hello-world.txt', 'hello-world', (err) => {
    if (err) {
        console.log(err);
    }
    console.log('filename has been changed')
});

fs.renameSync('./sync-hello-world.txt', './sync-hello-world');
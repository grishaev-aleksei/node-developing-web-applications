const fs = require('fs');

const data = '\n new string using append';

fs.appendFile('./hello-world.txt', data, (err) => {
    if (err) {
        console.log(err);
    }
} );

fs.appendFileSync('sync-hello-world.txt', data);
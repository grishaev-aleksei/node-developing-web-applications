const fs = require('fs');

fs.readFile('./hello-world.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data);
});

console.log(fs.readFileSync('./sync-hello-world.txt', 'utf8'));
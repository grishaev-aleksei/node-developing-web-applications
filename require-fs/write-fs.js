const fs = require('fs');

const data = 'hello world message';

fs.writeFile('hello-world.txt', data, 'utf8', (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});

fs.appendFileSync('sync-hello-world.txt', data, 'utf8');
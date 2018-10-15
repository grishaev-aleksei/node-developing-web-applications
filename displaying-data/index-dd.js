const yargs = require('yargs');
const data = require('./data');
const argv = yargs.argv;
const command = argv._[0];



if (command === 'add') {
    const firstName = argv.firstName;
    const lastName = argv.lastName;
    const email = argv.email;
    const addObj = {
        firstName,
        lastName,
        email
    };
    data.push(addObj);
    console.log(data);
} else if (command === 'delete') {
    const firstName = argv.firstName;
    for (let i = 0; i < data.length; i++) {
        if (data[i].firstName === firstName) {
            data.splice(i, 1);
        }
    }
    console.log(data);
} else {
    console.log('Please, enter valid command')
}

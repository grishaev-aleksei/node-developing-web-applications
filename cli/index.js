const yargs = require('yargs');
const data = require('./data');
const logData = () => {
    console.log(data)
};

const findIndex = (data, item) => {
    let index = -1;
    for (let i = 0; i < data.length; i++) {
        if (data[i][item] !== undefined) {
            index = i;
        }
    }
    return index
};

const createObj = (name, detail) => {
    const obj = `{"${name}":"${detail}"}`;
    return JSON.parse(obj);
};

const argv = yargs.argv;
const command = argv._[0];

if (command === 'view') {
    logData();
} else if (command === 'add') {
    const newObj = createObj(argv.name, argv.detail);
    data.push(newObj);
    logData();
} else if (command === 'delete') {
    const deleteItem = argv.deleteItem;
    const index = findIndex(data, deleteItem);

    if (index !== -1) {
        data.splice(index, 1);
        console.log(index + " second index")
    }
    logData();
} else if (command === 'edit') {
    const editItem = argv.editItem;
    const editKey = argv.editKey;
    const editValue = argv.editValue;
    const index = findIndex(data, editItem);
    if (index !== -1) {
        data[index] = createObj(editKey, editValue);
        logData();

    } else {
        console.log('item not found')
    }
    console.log(index);

} else {
    console.log('please use a valid command')
}


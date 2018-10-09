const info = require('./info');
info.name.thirdname = "Andreevich";

info.age = 27;

const stringInfo = JSON.stringify(info);

const backToJson = JSON.parse(stringInfo);

delete backToJson.age;

console.log(typeof info.age);
console.log(info.name);
console.log(info.name.firstname);
console.log(info['name']['firstname']);
console.log(stringInfo);
console.log(backToJson);

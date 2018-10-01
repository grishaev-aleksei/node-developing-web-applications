const url = require('url');
//15 done

const myURL = new URL('http://tc-lykkewallet2.westeurope.cloudapp.azure.com/viewType.html?buildTypeId=ChartPrototype_BuildDev');
const parseUrl = url.parse(myURL.href, true);


console.log(parseUrl.query.buildTypeId);



const obj = {
    first: 'Johan',
    last: 'Smitcovich'
};

const {first} = obj;

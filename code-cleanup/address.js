const url = require('url');

const myUrl = new URL('https://www.google.ru/search?q=webstorm+show+hint&oq=webstorm+show+hint');

const parseUrl = url.parse(myUrl.href, true);
const data = parseUrl.query;

module.exports = {data};

//16 done
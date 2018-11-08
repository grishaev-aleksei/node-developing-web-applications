const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'myproject';

// Use connect method to connect to the server
MongoClient.connect(url, {useNewUrlParser: true}, (err, client) => {
    if (err) {
        return console.log(err);
    }
    // else assert.strictEqual(null, err);
    console.log("Connected successfully to server");

    const db = client.db(dbName);
    const collection = db.collection(dbName);

    collection.insertOne(
        {
            name: 'Aleksei'
        }, (err, result) => {
            if (err) {
                console.log(err)
            }
            console.log('successfully inserted')
        });

    client.close();
});
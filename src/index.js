const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost'
const dbName = 'maodo';


  MongoClient.connect(this.url, function (err, client) {
    console.log("Connecté à MongoDB");
    const db = client.db(this.dbName);
    client.close();
  });



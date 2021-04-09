const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://127.0.0.1:27017'


module.exports.getDB = async function communicationDB(dbName, myobj){
    return new Promise(async (resolve, reject)=>{
        let db;  
        MongoClient.connect(url, {useNewUrlParser: true, useUnifiedTopology: true}, function(err, db) {
            if (err) throw err;
            let dbo = db.db("Colaboradores");
            dbo.collection(dbName).insertOne(myobj, function(err, res) {
              if (err) throw err;
              resolve(res);
              db.close();
            });
          });
        resolve()
    })
}

module.exports.findDB = async function findDB(dbName, query){
    return new Promise(async (resolve, reject)=>{
        let db;  
        MongoClient.connect(url, {useNewUrlParser: true, useUnifiedTopology: true}, function(err, db) {
            if (err){
                throw err
            };
            let dbo = db.db("Colaboradores");
            dbo.collection(dbName).findOne(query).toArray(function(err, res) {
                if (err){
                   throw err
                };
                resolve(res);
                db.close();
            });
        });
    });
};

module.exports.updateDB = async function updateDB(dbName, query){
    return new Promise(async (resolve, reject)=>{
        let db;  
        MongoClient.connect(url, {useNewUrlParser: true, useUnifiedTopology: true}, function(err, db) {
            if (err){
                throw err
            };
            let dbo = db.db("Colaboradores");
            dbo.collection(dbName).updateOne(query).toArray(function(err, res) {
                if (err){
                   throw err
                };
                resolve(res);
                db.close();
            });
        });
    });
};
// module.export.getDB = async function getDB(dbName, ){
//     return new Promise(async (resolve, reject)=>{
//         let db = await connectDB(dbName)

//     })
//}



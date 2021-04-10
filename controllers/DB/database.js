const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://127.0.0.1:27017'


<<<<<<< HEAD:controllers/DB/database.js

=======
>>>>>>> 1fe8eb74139bd328c9eb06102628cb29591068e1:database.js
module.exports.insertDB = async function insertDB(dbName, myobj){
    return new Promise(async (resolve, reject)=>{
        let db;  
        MongoClient.connect(url, {useNewUrlParser: true, useUnifiedTopology: true}, function(err, db) {
            if (err) throw err;
            let dbo = db.db("HighStakes");
            dbo.collection(dbName).insertOne(myobj, function(err, res) {
                if (err) {
                    throw err;
                }
               // console.log(res.insertedId)
                resolve(res);
                db.close();
            });
        });
    })
}

module.exports.findDB = async function findDB(dbName, query={}, options={}){
    return new Promise(async (resolve, reject)=>{
        let db;  
        MongoClient.connect(url, {useNewUrlParser: true, useUnifiedTopology: true}, function(err, db) {
            if (err){
                throw err
            };
            let dbo = db.db("HighStakes");
            dbo.collection(dbName).findOne(query, function(err, res) {
                if (err){
                   throw err
                };
                //console.log(res)
                resolve(res);
                db.close();
            });
        });
    });
};

module.exports.updateDB = async function updateDB(dbName, myquery, newvalues){
    return new Promise(async (resolve, reject)=>{
        let db;  
        console.log(newvalues)
        MongoClient.connect(url, {useNewUrlParser: true, useUnifiedTopology: true}, function(err, db) {
            if (err){
                throw err
            };
            let dbo = db.db("HighStakes");
<<<<<<< HEAD:controllers/DB/database.js
            dbo.collection(dbName).updateOne(myquery, newvalues, function(err, res) {
=======
            dbo.collection(dbName).updateOne().toArray(function(err, res) {
>>>>>>> 1fe8eb74139bd328c9eb06102628cb29591068e1:database.js
                if (err) {
                    throw err
                };
              console.log(res.result.nModified + " document(s) updated");
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



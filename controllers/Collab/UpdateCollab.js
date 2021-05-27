const mongo = require('mongodb');
const ObjectID = require('mongodb').ObjectID
const updateDB = require('../DB/database').updateDB

module.exports.UpdateCollab = async function UpdateCollab(nameCollection, idCollab, query){
    return new Promise(async (resolve, reject)=>{
        let respDB = await updateDB(nameCollection, { '_id': (mongo.ObjectID(idCollab)) } , query);
        console.log(respDB)
        resolve(respDB)
    })
}

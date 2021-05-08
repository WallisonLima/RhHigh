const mongo = require('mongodb');
const ObjectID = require('mongodb').ObjectID
const updateDB = require('../DB/database').updateDB

module.exports.UpdateCollab = async function UpdateCollab(nameCollection, idCollab, query){
    return new Promise(async (resolve, reject)=>{
        console.log(idCollab)
        let respDB = await updateDB(nameCollection, { '_id': (mongo.ObjectID(idCollab)) } , query);
        resolve(respDB)
    })
}

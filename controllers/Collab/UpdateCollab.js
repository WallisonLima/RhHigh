const mongo = require('mongodb');
const ObjectId = require('mongodb').ObjectID
const updateDB = require('../DB/database').updateDB

module.exports.UpdateCollab = async function UpdateCollab(nameCollection, idCollab, query){
    return new Promise(async (resolve, reject)=>{
        let idObj = mongo.ObjectID(idCollab);
        let respDB = await updateDB(nameCollection, { '_id': idObj }, query);
        resolve(respDB)
    })
}

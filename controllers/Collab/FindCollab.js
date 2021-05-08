const findDB = require('../DB/database').findDB
const findOneDB = require('../DB/database').findOneDB

module.exports.FindCollab = async function FindCollab(nameCollection, query={}, options){
    return new Promise(async (resolve, reject)=>{
        let respDB = await findDB(nameCollection, query, options)
        resolve(respDB)
    })
}

module.exports.FindCollabOne = async function FindCollabOne(nameCollection, query={}, options){
    return new Promise(async (resolve, reject)=>{
        let respDB = await findOneDB(nameCollection, query, options)
        resolve(respDB)
    } )
}

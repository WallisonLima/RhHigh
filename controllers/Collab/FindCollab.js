const findDB = require('../DB/database').findDB

module.exports.FindCollab = async function FindCollab(nameCollection, query={}, options){
    return new Promise(async (resolve, reject)=>{
        let respDB = await findDB(nameCollection, query, options)
        console.log(respDB)
        resolve(respDB)
    })
}

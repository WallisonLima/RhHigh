const insertDB = require('../DB/database').insertDB

module.exports.CreatCollab = async function CreatCollab(nameCollection, dataCollab){
    return new Promise(async (resolve, reject)=>{
        let respDB = insertDB(nameCollection, dataCollab)
        resolve(respDB)
    })
}
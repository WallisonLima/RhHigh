const insertDB = require('../DB/database').insertDB

module.exports.CreatCollab = async function CreatCollab(nameCollection, dataCollab){
    return new Promise(async (resolve, reject)=>{
        //console.log(nameCollection)
        let respDB = await insertDB(nameCollection, dataCollab)
        resolve(respDB)
    })
}
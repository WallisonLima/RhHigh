const findDB = require('../DB/database').findDB

module.exports.FindCollab = async function FindCollab(nameCollection, query={}, options){
    return new Promise(async (resolve, reject)=>{
        console.log(nameCollection)
        let respDB = await findDB(nameCollection, query, options)
        resolve(<div>respDB</div>)
    })
}

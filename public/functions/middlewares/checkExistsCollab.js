const FindOneCollab = require('../../../controllers/Collab/FindCollab').FindCollabOne


module.exports.checkExistsCollab = async function checkExistsCollab({body}){
    return new Promise(async (resolve, reject)=>{
        let resp = await FindOneCollab('High', body)
        resolve(resp)
    })
}
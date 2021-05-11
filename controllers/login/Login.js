const consultLog = require('../DB/database').consultDB

module.exports.consultLogin = async function consultLogin({body}){
    return new Promise(async (resolve, reject)=>{
        let resp = await consultLog('login', body);
        resolve(resp)
    })
}
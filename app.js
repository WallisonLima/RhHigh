const sleep = require('./componentes').sleep
const getDB = require('./database').getDB
const findDB = require('./database').findDB
const updateDB = require('./database').updateDB

async function go(){
    //let consult = await getDB('High',{nome: "Matheus Moraes", idade: 20, cargo: "Gerente de Campanha"})
    let consult = await findDB('High', {nome:"Wallison Lima"}) 
    await sleep(1000)  
    //let resposta = await updateDB('High', ({_id: ObjectId(consult._id)}, {$set: {nome: "Wallison Lima"}}))
    
    console.log(consult)
   // console.log(reposta)
}

go()
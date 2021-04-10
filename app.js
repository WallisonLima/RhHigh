<<<<<<< HEAD
const express = require('express')
const app = express()
let port = 8080


app.use(express.static('public'));
app.use('/controllers', express.static(__dirname + 'public'));

app.get('/', (req, res)=>{
    res.sendFile('./puclic')
})



app.listen(port, ()=>{
    console.log(`Servidor rodando em localhost:${port}`)
})

    
=======
const sleep = require('./componentes').sleep
const insertDB = require('./database').insertDB
const findDB = require('./database').findDB
const updateDB = require('./database').updateDB
const dataCollab = require('./collaborator.js').dataCollab

async function go() {

    let collab = await dataCollab()
    let respCreat = await insertDB('High',collab)
    //console.log(respCreat)
    let o = await dataCollab(respCreat._id)
    console.log(o)
    //let respConsult = await findDB('High', respCreat._id)

    // if(respConsult != 'null'){
    //     console.log(respConsult)
    // }
    //let id = { _id: "6070d4df2e0e2e7dd4901c49" }
    //let respUpdate = await updateDB('High', {id: respConsult._id}, { $set: { nome: "Wallison Lima" }});

    //console.log(respostaCreat)
    //console.log(respConsult._id)
    await sleep(1000)
   
}
>>>>>>> 1fe8eb74139bd328c9eb06102628cb29591068e1






   
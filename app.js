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



// const CreatCollab = require('./public/controllers/Collab/CreatCollab').CreatCollab
// const FindCollab = require('./public/controllers/Collab/FindCollab').FindCollab
// const UpdateCollab = require('./public/controllers/Collab/UpdateCollab').UpdateCollab
// const dataCollab = require('./dataCollab.js').dataCollab
    






   
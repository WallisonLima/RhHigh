const express = require('express');
const bodyParser = require('body-parser')
const routes = express.Router();
const CreatCollab = require('./controllers/Collab/CreatCollab').CreatCollab
const FindCollab = require('./controllers/Collab/FindCollab').FindCollab
const dataCollab = require('./controllers/Collab/ObjectCollab').dataCollab;
const UpdateCollab = require('./controllers/Collab/UpdateCollab').UpdateCollab;

routes.use(bodyParser.urlencoded({ extended: false }))
routes.use(bodyParser.json())

let urlencodedParser = bodyParser.urlencoded({ extended: false })


routes.get('/', (req, res) => {
    return res.sendFile(__dirname + '/public/views/home.html')
})

routes.get('/cadastrar', (req, res) => {
    return res.sendFile(__dirname + '/public/views/cadastro.html')
})

routes.post('/cadastrarColaborador', urlencodedParser, async function (req, res) {
    let data = await dataCollab(req)
    let respCreat = await CreatCollab('High', data)
    if(respCreat.insertedCount == 1){
        res.redirect('/cadastrar')
    }else{
        res.send('Throw error')
    }
})


routes.get('/buscar', (req, res) => {
    return res.sendFile(__dirname + '/public/views/buscar.html')
})

routes.post('/buscarColaborador', urlencodedParser, async function (req, res){
    let data = await dataCollab(req)
    let respFind = await FindCollab('High', data)
    console.log(respFind)
    if(respFind !== null){
        res.send(respFind)
    }else{
        res.send('Funcionario nao encontrado')
    }
    
})

routes.get('/atualizar', (req, res) => {
    return res.sendFile(__dirname + '/public/views/atualizar.html')
})

// routes.post('/atualizarColaborador', urlencodedParser, async function (req, res){
//     let data = await dataCollab(req)
//     let respFind = await FindCollab('High', data)
//     console.log(respFind._id)
//     let respUpdate = await UpdateCollab('High', respFind._id)
//     // return res.send('Retorno com de sucesso ou falha na Atualização')
// })







module.exports = routes;
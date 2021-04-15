const express = require('express');
const bodyParser = require('body-parser')
const routes = express.Router();
const CreatCollab = require('./controllers/Collab/CreatCollab').CreatCollab
const FindCollab = require('./controllers/Collab/FindCollab').FindCollab
const dataCollab = require('./controllers/Collab/ObjectCollab').dataCollab;
const UpdateCollab = require('./controllers/Collab/UpdateCollab').UpdateCollab;
let idCollab = ''

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
    if (respCreat.insertedCount == 1) {
        res.redirect('/cadastrar')
    } else {
        res.send('Throw error')
    }
})


routes.get('/buscar', (req, res) => {
    return res.sendFile(__dirname + '/public/views/buscar.html')
})

routes.post('/buscarColaborador', urlencodedParser, async function (req, res) {
    let data = await dataCollab(req)
    let respFind = await FindCollab('High', data)
    if (respFind !== null) {
        res.send(respFind)
    } else {
        res.send('Colaborador nao encontrado')
    }

})


routes.get('/atualizar', (req, res) => {
    return res.sendFile(__dirname + '/public/views/atualizar.html')
})

routes.post('/atualizarColaborador', urlencodedParser, async function (req, res) {
    let data = await dataCollab(req)
    let respFind = await FindCollab('High', data)
    if (respFind[0]._id == undefined) {
        return res.send('colaborador nao encontrado')
    } else {
        return res.sendFile(__dirname + '/public/views/GetAtualizaCollab.html')
    }
})

routes.post('/getCollab', urlencodedParser, async function (req, res) {
    
})







module.exports = routes;
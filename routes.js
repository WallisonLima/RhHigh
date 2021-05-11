const express = require('express');
const bodyParser = require('body-parser');
const routes = express.Router();
const CreatCollab = require('./controllers/Collab/CreatCollab').CreatCollab
const FindCollab = require('./controllers/Collab/FindCollab').FindCollab
const FindOneCollab = require('./controllers/Collab/FindCollab').FindCollabOne
const dataCollab = require('./controllers/Collab/ObjectCollab').dataCollab;
const UpdateCollab = require('./controllers/Collab/UpdateCollab').UpdateCollab;
const buscarColaborador = require('./public/functions/middlewares/buscarColaborador').buscarColaborador
const checkExistsCollab = require('./public/functions/middlewares/checkExistsCollab').checkExistsCollab
const consultLogin = require('./controllers/login/Login').consultLogin
let i = 0

routes.use(bodyParser.urlencoded({ extended: false }))
routes.use(bodyParser.json())

let urlencodedParser = bodyParser.urlencoded({ extended: false })



async function checkLog(req, res, next){
    if(i == 0){
        res.redirect("/login")
    }
    next()
}


async function checkExists(req, res, next) {
    let respCheck = await checkExistsCollab(req)
    if(respCheck != null){
        return res.status(400).json({ error: 'Usuário ja cadastrado' });
    }
    return next(); 
}



routes.get('/login', (req, res) => {
    res.sendFile(__dirname + '/public/views/login.html')
})

routes.post('/signUp', async function(req, res){
    let resp = await consultLogin(req)
    if(resp != null){
        i = 1
        res.redirect("/")
    }else{
        res.send("Login Invalido")
    }
})



routes.get('/', checkLog, (req, res) => {
    return res.sendFile(__dirname + '/public/views/home.html')
})


routes.get('/cadastrar', checkLog, (req, res) => {
    return res.sendFile(__dirname + '/public/views/cadastro.html')
})
routes.post('/cadastrarColaborador', urlencodedParser, checkExists, async function (req, res) {
    let respCreat = await CreatCollab('High', data)
    if (respCreat.insertedCount == 1) {
        res.redirect('/cadastrar')
    } else {
        res.send('Throw error')
    }
})


routes.get('/buscar', checkLog, (req, res) => {
    return res.sendFile(__dirname + '/public/views/buscar.html')
})
routes.post('/buscarColaborador', urlencodedParser, async function (req, res) {
    let data = await dataCollab(req)
    let respFind = await FindCollab('High', data)
    let renderResp = await buscarColaborador(respFind)
    if (respFind !== null) {
        return res.send(renderResp)
    } else {
        res.send('Colaborador nao encontrado')
    }
})


routes.get('/atualizar', checkLog, (req, res) => {
    return res.sendFile(__dirname + '/public/views/atualizar.html')
})
routes.post('/atualizarColaborador', urlencodedParser, async function (req, res) {
    let data = await dataCollab(req)
    let respFind = await FindOneCollab('High', data)
    if (respFind == null) {
          return res.send('colaborador nao encontrado')
    }
    await UpdateCollab('High', respFind._id, '{name: "Wallison"}')

})



module.exports = routes;
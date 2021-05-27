const express = require('express');
const bodyParser = require('body-parser');
const routes = express.Router();
const CreatCollab = require('./controllers/Collab/CreatCollab').CreatCollab
const FindCollab = require('./controllers/Collab/FindCollab').FindCollab
const FindOneCollab = require('./controllers/Collab/FindCollab').FindCollabOne
const dataCollab = require('./controllers/Collab/ObjectCollab').dataCollab;
const UpdateCollab = require('./controllers/Collab/UpdateCollab').UpdateCollab;
const BuscarColaborador = require('./public/functions/views/BuscarColaborador').BuscarColaborador
const help = require('./helpers')
const checkExistsCollab = require('./public/functions/middlewares/checkExistsCollab').checkExistsCollab
const consultLogin = require('./controllers/login/Login').consultLogin
let i = 0;


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
    next(); 
}



routes.get('/login', (req, res) => {
    res.sendFile(__dirname + '/public/views/login.html')
})

routes.get('/', checkLog, (req, res) => {
    return res.sendFile(__dirname + '/public/views/home.html')
})

routes.get('/cadastrar', checkLog, (req, res) => {
    return res.sendFile(__dirname + '/public/views/cadastro.html')
})

routes.get('/buscar', checkLog, (req, res) => {
    return res.sendFile(__dirname + '/public/views/buscar.html')
})

routes.get('/atualizar', checkLog, (req, res) => {
    return res.sendFile(__dirname + '/public/views/atualizar.html')
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

routes.post('/cadastrar/colaborador', urlencodedParser, checkExists, async function (req, res) {
    let data = await dataCollab(req)
    let respCreat = await CreatCollab('High', data)
    if (respCreat.insertedCount == 1) {
        res.redirect('/cadastrar')
    } else {
        res.send('Throw error')
    }
})

routes.post('/buscar/colaboradores', urlencodedParser, async function (req, res) {
    let data = await dataCollab(req)
    let colab = await FindCollab('High', data)
    let table = await BuscarColaborador(colab)
    let content = await help.getPart(__dirname + '/public/views/buscarColaborador.html', [{ search: '{{table}}', replace: table }])
    if (colab !== null) {
        return res.send(content)
    } else {
        res.send('Colaborador nao encontrado')
    }
})

routes.post('/atualizar/colaborador', urlencodedParser, async function (req, res) {
    let data = await dataCollab(req)
    let respFind = await FindOneCollab('High', data)
    if (respFind == null) {
        return res.send('colaborador nao encontrado')
    }
    let {_id, name, cpf, email, phone, occupation, birth, scholarYear} = respFind;
    let content = await help.getPart(__dirname + '/public/views/atualizarColaborador.html', [
        { search: '{{id}}', replace: _id },
        { search: '{{name}}', replace: name },
        { search: '{{cpf}}', replace: cpf },
        { search: '{{email}}', replace: email },
        { search: '{{phone}}', replace: phone },
        { search: '{{occupation}}', replace: occupation },
        { search: '{{birth}}', replace: birth },
        { search: '{{scholarYear}}', replace: scholarYear },
    ])
    res.send(content)
    //await UpdateCollab('High', respFind._id, '{name: "Wallison"}')
})

routes.post('/atualizar/colaborador/atualizado', urlencodedParser, async function (req, res) {
    let data = req.body;
    let content = {
        name: data.name,
        cpf: data.cpf,
        email: data.email,
        phone: data.phone,
        occupation: data.occupation,
        birth: data.birth,
        scholarYear: data.scholarYear
    }
    await UpdateCollab('High', data.id, content)
    res.redirect("/");
})



module.exports = routes;
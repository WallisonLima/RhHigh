const express = require('express');
const bodyParser = require('body-parser')
const routes = express.Router();
const CreatCollab = require('./controllers/Collab/CreatCollab').CreatCollab
const FindCollab = require('./controllers/Collab/FindCollab').FindCollab


routes.use(bodyParser.urlencoded({ extended: false }))
routes.use(bodyParser.json())
let urlencodedParser = bodyParser.urlencoded({ extended: false })


routes.get('/', (req, res) => {
    return res.sendFile(__dirname + '/public/views/home.html')
})

routes.get('/cadastrar', (req, res) => {
    return res.sendFile(__dirname + '/public/views/cadastro.html')
})

routes.post('/cadastrarColaborador', urlencodedParser, function (req, res) {
    let data =
    {
        name: req.body.name,
        email: req.body.email,
        birth: req.body.birth,
        scholarYear: req.body.scholarYear
    }
    CreatCollab('High', data)
    res.redirect('/cadastrar')
})


routes.get('/buscar', (req, res) => {
    return res.sendFile(__dirname + '/public/views/buscar.html')
})

routes.post('/buscarColaborador', (req, res) => {
    let data = {
        name: req.body.name,
        email: req.body.email,
        birth: req.body.birth,
        scholarYear: req.body.scholarYear
    }
    let respFind = FindCollab('High', data)
    res.send(respFind)
})

routes.get('/atualizar', (req, res) => {
    return res.send('rota de atualizacao')
})

routes.post('/atualizarColaborador', (req, res) => {
    return res.send('Retorno com de sucesso ou falha na Atualização')
})







module.exports = routes;
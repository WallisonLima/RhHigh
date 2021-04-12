const express = require('express');
const routes = express.Router();


routes.get('/', (req, res)=>{
    return res.sendFile(__dirname + '/public/views/home.html')
})

routes.get('/cadastrar', (req, res)=>{
    return res.sendFile(__dirname + '/public/views/cadastro.html')
})

routes.post('/cadastrarColaborador', (req, res)=>{
    return res.send('Retorno com sucesso ou falha no Cadastro')
})

routes.get('/buscar', (req, res)=>{
    return res.sendFile(__dirname + '/public/views/buscar.html')
})

routes.post('/buscarColaborador', (req, res)=>{
    return res.send('Retorno de sucesso ou falha na Busca')
})

routes.get('/atualizar', (req, res)=>{
    return res.send('rota de atualizacao')
})

routes.post('/atualizarColaborador', (req, res)=>{
    return res.send('Retorno com de sucesso ou falha na Atualização')
})







module.exports = routes;
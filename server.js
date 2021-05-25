const express = require("express");
const server = express();
const routes = require('./routes')

let port = 8001


server.set('view engine', 'ejs');
server.use(express.static("public"));
server.use(routes)


server.listen(port, ()=>{
    console.log(`Servidor rodando em localhost:${port}`)
})









   
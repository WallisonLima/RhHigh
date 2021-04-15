const express = require("express");
const server = express();
const routes = require('./routes')

let port = 8080

server.use(express.static("public"));
server.use(routes)



server.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

server.listen(port, ()=>{
    console.log(`Servidor rodando em localhost:${port}`)
})









   
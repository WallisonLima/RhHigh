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

    






   
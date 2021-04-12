
Cods de ajuda relacionado ao banco de dados

Este comando possibilita inserir um objeto no banco

    db.customers.insert({ nome: "Wallison", idade: 21 , cargo: "Programador"})     

essa linha permite realizar uma consulta no banco, retornando no terminal os objetos de forma identada graças ao '.pretty()
    ' passado ao final do comando

    db.customers.find().pretty()   

consulta avançada como filtro todos os objetos que contem como cargo Programador     
    
    db.customers.find({ cargo: "Programador" })     

consulta avançada com filtro 'todos documentos que possuam a letra a'

    db.customers.find({nome: { $regex: /a/ }})      

retorna todos os documentos com cargo que contenha a letra P

    db.customers.find({cargo: {$regex: /P/}}).pretty()    

retorna todos os documentos que contem idade acima de 18

    db.customers.find({idade: {$gte: 18}}).pretty()     

retorna todos os documentos que contem em nome a letra W e o cargo seja Programador    

    db.customer.find({nome: {$regex: /W/}, cargo:"Programador"}).pretty()    

retorna somente um documento    

    db.customers.findOne()      

    
    $eq: exatamente igual (=)
    $ne: diferente (<> ou !=)
    $gt: maior do que (>)
    $lt: menor do que (<)
    $lte: menor ou igual a (<=)
    $in: o valor está contido em um array de possibilidades, como em um OU. Ex: {idade: {$in: [10,12] }}
    $all: MongoDB permite campos com arrays. Ex: { tags: [“NodeJS”, “MongoDB”] }. Com esse operador, você compara se seu campo multivalorado possui todos os valores de um array específico. Ex: {tags: {$all: [“NodeJS”, “Android”]}}

retorna todos os documentos, pulando o primeiro e com limite maximo de dois documentos por consulta

    db.customers.find().skip(1).limit(2)    

retorna todos os documentos que de forma crescente por idade

    db.customers.find().sort({idade: 1})    

altera o documento proposto no primeiro objeto, para o segundo objeto, alterando completamnete

    db.customers.update({name:"Wallison"}, {nome: "Wallison", idade: 21, cargo: "FullStack"})   



    db.customers.update({_id: ObjectId("607089ab38f3ef6271167bd5")}, {$set: {idade: 28}}) // altera a idade do documento com o id correspondente por 28

maneira correta de alterar um campo no documento, altera o objeto com o id correspondete inserindo uma nova linha com null ↓

 db.customers.update({_id: ObjectId("607089ab38f3ef6271167bd5")}, {$set: {experiencia: null}})  


    $unset: remove o respectivo campo do documento;
    $inc: incrementa o valor original do campo com o valor especificado;
    $mul: multiplica o valor original do campo com o valor especificado;
    $rename: muda o nome do campo para o nome especificado;    

    db.customer.update({_id: ObjectId("60708d1038f3ef6271167bd7")}, {experiencia: 10})

    db.customers.deleteOne({_id: ObjectId("607089ab38f3ef6271167bd6")}, {$set: {idade: "5.1"})  // exclue todos os documentos que contem o nome Wallison


    Primeiro, selecione as linhas que deseja comentar / descomentar ( CTRL+ Lé conveniente selecionar algumas linhas)

    Então:

    Para alternar os comentários da linha, execute editor.action.commentLine( CTRL+ /no Windows)

    ou

    Para adicionar comentários de linha, execute editor.action.addCommentLine( CTRL+ K CTRL+ C)

    Para remover comentários de linha, execute editor.action.removeCommentLine( CTRL+ K CTRL+ U)

    ou

    Para alternar um comentário em bloco, execute editor.action.blockComment( SHIFT- ALT- A)


const CreatCollab = require('./public/controllers/Collab/CreatCollab').CreatCollab
const FindCollab = require('./public/controllers/Collab/FindCollab').FindCollab
const UpdateCollab = require('./public/controllers/Collab/UpdateCollab').UpdateCollab
const dataCollab = require('./dataCollab.js').dataCollab



start no servidor do banco de dados:
    sudo systemctl status mongod
    sudo service mongod start

    atualização do commit
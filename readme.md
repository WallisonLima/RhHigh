
# Projeto de estudo baseado no cadastro de colaboradores ao banco de dados da empresa.

## Neste projeto foi implementado JavaScript, NodeJS, MongoDB, HTML5 e CSS3.

![Interface](./imgHub/Interface.png)

Como requisito neste projeto, deve haver instalado na maquina em questão os seguinte:

* [NodeJS](https://nodejs.org/en/)
* [Git](https://git-scm.com/downloads)
* [Mongo](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/)

e uma IDE, como estou usando o VSCode deixo também um link para download:

* [VsCode](https://code.visualstudio.com/)

Feito e instalação das ferramentas utilizadas nesse projeto, siga os passo abaixo para testar o projeto em questão:

1. Abra um terminal (no Windows procure algo como CMD (conhecido como shell), e no Linux apenas digite `CTRL+ALT+t`)
2. Cole o seguinte comando para subir o servidor do banco de dados rodando em sua própria máquina: `sudo service mongod start` para linux, `"C:\Program Files\MongoDB\Server\4.4\bin\mongo.exe"` no windows.
3. Abra a IDE escolhida, no meu caso o VsCode
4. Abra um terminal na pasta do projeto, no caso do VsCode localizado na barra de tarefas, descrito como `Terminal`, `new Terminal` OU digite `CTRL + ALTgr + j`
5. [Clone](https://docs.github.com/pt/github/creating-cloning-and-archiving-repositories/cloning-a-repository#:~:text=10%2C%20done.-,Clonar%20um%20reposit%C3%B3rio%20no%20GitHub%20Desktop,Desktop%20para%20concluir%20o%20clone.) o projeto em questão.
6. Após o download instale todas as dependências necessárias com npm: `npm install`

    6.1 Caso de erro em alguma dependência, saiba que as dependências necessárias podem ser baixadas separadamente com `npm install express`,  `npm install body-parser`,  `npm install mongodb`
8. Feito o download corretamente de tudo, rode no mesmo terminal aberto na pasta do projeto o seguinte comando: `node server.js`

Se tudo correr bem, abra o navegador de preferência e digite na url [localhost:8080](localhost:8080)

Logo verá nossa aplicação rodando com as rotas de cadastro, consulta e update(ainda em desenvolvimento). Caso tenha alguma opinião em relação a melhora do processo ou implementação de algo (que com certeza haverá rsrs), deixe sua sugestão sem medo, será muito bem-vinda. Afinal sou somente um aprendiz e quero progredir com quem sabe. 

#### Obrigado!


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

retorna todos os documentos de forma crescente por idade

    db.customers.find().sort({idade: 1})    

altera o documento proposto no primeiro objeto, para o segundo objeto, alterando completamente

    db.customers.update({name:"Wallison"}, {nome: "Wallison", idade: 21, cargo: "FullStack"})   



    db.customers.update({_id: ObjectId("607089ab38f3ef6271167bd5")}, {$set: {idade: 28}}) // altera a idade do documento com o id correspondente por 28

maneira correta de alterar um campo no documento, altera o objeto com o id correspondente inserindo uma nova linha com null ↓

     db.customers.update({_id: ObjectId("607089ab38f3ef6271167bd5")}, {$set: {experiencia: null}})  


    $unset: remove o respectivo campo do documento;
    $inc: incrementa o valor original do campo com o valor especificado;
    $mul: multiplica o valor original do campo com o valor especificado;
    $rename: muda o nome do campo para o nome especificado;    

    db.customer.update({_id: ObjectId("60708d1038f3ef6271167bd7")}, {experiencia: 10})

    db.customers.deleteOne({_id: ObjectId("607089ab38f3ef6271167bd6")}, {$set: {idade: "5.1"})  // exclue todos os documentos que contem o nome Wallison


### Anotações importantes para mim

Verificar status do banco: 

`sudo systemctl status mongod`

`sudo service mongod start`

Primeiro, selecione as linhas que deseja comentar / descomentar ( `CTRL + L` é conveniente selecionar algumas linhas)

Então:

Para alternar os comentários da linha, execute editor.action.commentLine( `CTRL + /` no Windows)

ou

Para adicionar comentários de linha, execute editor.action.addCommentLine( `CTRL + K` , `CTRL + C`)

Para remover comentários de linha, execute editor.action.removeCommentLine( `CTRL + K` , `CTRL + U`)

ou

Para alternar um comentário em bloco, execute editor.action.blockComment( `SHIFT - ALT - A`)





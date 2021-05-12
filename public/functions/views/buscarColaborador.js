
module.exports.buscarColaborador = async function buscarColaborador(data) {
    return new Promise(async (resolve, reject) => {
        let tr = ''
        data.map(element => {
            tr += `<div style="margin-left: 10px"'><tr> <td>Nome: ${element.name}</td><br>
                        <td>CPF: ${element.cpf}</td><br>
                        <td>Email: ${element.email}</td><br>
                        <td>Telefone: ${element.phone}</td><br>
                        <td>Cargo: ${element.occupation}</td><br>
                        <td>Nascimento: ${element.birth}</td><br>
                   </tr><br></div>`
        });
        let component = `
            <!DOCTYPE html>
            <html lang="pt-br">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Find Collab High</title>
            </head>
            <body>
                <tbody><div style="display:flex; flex-direction: column; margin:100px auto 10px auto">${tr}</div></tbody>
            </body>
            </html>`

        resolve(component)

    })
}